import 'd3'
import {getTooltipCols} from './utils/tooltip'


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


class CSVLoader {

  constructor({url, opts, tooltip}) {
    this.url = url
    this.opts = opts
    this.tooltipCols = getTooltipCols(tooltip)
  }

  getData() {
    let {xCol, yCol, sizeCol, groupCol} = this.opts

    return new Promise((resolve) => {
      this._getRows().then((rows) => {
        if (groupCol) {
          resolve(this._getGroupedData(rows))
        } else {
          resolve(this._getSingleData(rows))
        }
      })
    })
  }

  _getRows() {
    return new Promise((resolve, reject) => {
      d3.csv(this.url)
        .get((err, rows) => {
          if (err) {
            reject(new Error("error loading data"))
          } else {
            resolve(rows)
          }
        })
    })
  }

  _getGroupedData(rows) {
    let {groupCol} = this.opts
    let groups = {}
    rows.map(r => {
      let group = r[groupCol]
      if (!(group in groups)) {
        groups[group] = []
      }
      groups[group].push(_getDataItem(r, this.tooltipCols, this.opts))
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

  _getSingleData(rows) {
    // FIXME no keys? / Groups?
    let data = []
    data.push({
      key: 'Data',
      values: rows.map(r => {
        return _getDataItem(r, this.tooltipCols, this.opts)
      })
    })
    return data
  }

}


export default CSVLoader
