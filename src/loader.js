import 'd3'


class CSVLoader {

  constructor({url, opts}) {
    this.url = url
    this.opts = opts
  }

  getData() {
    let {xCol, yCol, labelCol, sizeCol} = this.opts

    return new Promise((resolve) => {
      this._getRows().then((rows) => {
        let data = []
        data.push({
          key: 'Data',
          values: rows.map(r => {
            return {
              label: r[labelCol],
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
    let columns = this._getNeededColumns()
    return new Promise((resolve, reject) => {
      d3.csv(this.url)
        .row(r => {
          let row = {}
          for (let key of columns) {
            row[key] = r[key]
          }
          return row
        })
        .get((err, rows) => {
          if (err) {
            reject(new Error("error loading data"))
          } else {
            resolve(rows)
          }
        })
    })
  }

  _getNeededColumns() {
    // dont load too much data
    let {xCol, yCol, labelCol} = this.opts
    return [xCol, yCol, labelCol]
  }

}


export default CSVLoader
