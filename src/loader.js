import 'd3'


class CSVLoader {

  constructor({url, opts, tooltip}) {
    this.url = url
    this.opts = opts
    this.tooltip = tooltip
  }

  getData() {
    let {xCol, yCol, sizeCol} = this.opts
    let tooltipCols = this._getTooltipCols()

    return new Promise((resolve) => {
      this._getRows().then((rows) => {
        let data = []
        data.push({
          key: 'Data',
          values: rows.map(r => {
            return {
              data: this._getTooltipData(r, tooltipCols),
              size: sizeCol ? Number(r[sizeCol]): 1,
              x: Number(r[xCol]),
              y: Number(r[yCol]),
            }
          })
        })
        resolve(data)
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

  _getTooltipData(row, cols) {
    let data = {}
    for (let col of cols) {
      data[col] = row[col]
    }
    return data
  }

  _getTooltipCols() {
    // extract all needed col names from tooltip templates
    // to get data for tooltip
    let {headTempl='', bodyTempl=''} = this.tooltip
    let headCols = this._getMatchesFromTempl(headTempl)
    let bodyCols = this._getMatchesFromTempl(bodyTempl)
    let cols = headCols.concat(bodyCols)
    let labelCol = this.tooltip.labelCol
    if (!(labelCol in cols)) {
      cols.push(labelCol)
    }
    return cols
  }

  _getMatchesFromTempl(templ) {
    let templRegExp = /\{(\w+)\}/g
    let matches = []
    let match = templRegExp.exec(templ)
    while (match != null) {
      matches.push(match[1])
      match = templRegExp.exec(templ)
    }
    return matches
  }

}


export default CSVLoader
