import 'nvd3'

const _getTooltipData = (row, cols) => {
  let data = {}
  for (let col of cols) {
    data[col] = row[col]
  }
  return data
}

const _getDataItem = (row, tooltipCols, {xCol, yCol, sizeCol=null}) => {
  return {
    data: _getTooltipData(row, tooltipCols),
    size: sizeCol ? Number(row[sizeCol]): 1,
    x: Number(row[xCol]),
    y: Number(row[yCol]),
  }
}

const MODELS = {

  /** SCATTER **/
  scatterChart: {
    chart: nv.models.scatterChart,

    /** getGroupedData **/
    getGroupedData: function({rows, tooltipCols, opts}) {
      let {groupCol} = opts
      let groups = {}
      rows.map(r => {
        let group = r[groupCol]
        if (!(group in groups)) {
          groups[group] = []
        }
        groups[group].push(_getDataItem(r, tooltipCols, opts))
      })
      let data = []
      for (let group in groups) {
        data.push({
          key: group,
          values: groups[group]
        })
      }
      return data
    },

    /** getSingleData **/
    getSingleData: function({rows, tooltipCols, opts}) {
      // FIXME no keys? / Groups?
      let data = []
      data.push({
        key: 'Data',
        values: rows.map(r => {
          return _getDataItem(r, tooltipCols, opts)
        })
      })
      return data
    },

    /** tooltip **/
    dataObj: 'point'
  },

  /** DISCRETE BAR **/
  discreteBarChart: {
    chart: nv.models.discreteBarChart,

    /** getSingleData **/
    getSingleData: function({rows, tooltipCols, opts}) {
      let data = [{
        key: 'Data',
        values: rows.map(r => {
          return {
            label: r[opts.labelCol],
            value: Number(r[opts.valueCol]),
            data: _getTooltipData(r, tooltipCols),
          }
        })
      }]
      return data
    },

    /** getGroupedData **/
    getGroupedData: function({rows, tooltipCols, opts}) {
      console.log(rows)
    },

    /** callX **/
    callX: function(chart) {
      chart.x(d => { return d.label })
    },

    /** callY **/
    callY: function(chart) {
      chart.y(d => { return d.value })
    },

    /** tooltip **/
    dataObj: 'data'
  }
}

const AVAILABLE_CHARTS = Object.keys(MODELS)

export default {MODELS, AVAILABLE_CHARTS}
