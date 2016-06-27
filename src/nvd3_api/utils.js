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

const _getSingleBarData = ({rows, tooltipCols, opts}) => {
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
}

const _getGroupedData = ({rows, tooltipCols, opts, itemFunc=_getDataItem}) => {
  let {groupCol} = opts
  let groups = {}
  rows.map(r => {
    let group = r[groupCol]
    if (!(group in groups)) {
      groups[group] = []
    }
    groups[group].push(itemFunc(r, tooltipCols, opts))
  })
  let data = []
  for (let group in groups) {
    data.push({
      key: group,
      values: groups[group]
    })
  }
  return data
}

const _groupedMultiItemFunc = (r, tooltipCols, opts) => {
  return {
    x: r[opts.xCol],
    y: Number(r[opts.yCol]),
    data: _getTooltipData(r, tooltipCols)
  }
}

const _getGroupedMultiBarData = ({rows, tooltipCols, opts}) => {
  let itemFunc = _groupedMultiItemFunc.bind(opts)
  return _getGroupedData({rows, tooltipCols, opts, itemFunc})
}

const _getSingleData = ({rows, tooltipCols, opts}) => {
  // FIXME no keys? / Groups?
  let data = []
  data.push({
    key: 'Data',
    values: rows.map(r => {
      return _getDataItem(r, tooltipCols, opts)
    })
  })
  return data
}


export default {
  _getTooltipData,
  _getDataItem,
  _getSingleBarData,
  _getGroupedData,
  _groupedMultiItemFunc,
  _getGroupedMultiBarData,
  _getSingleData
}
