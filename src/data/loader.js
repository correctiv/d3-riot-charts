import 'd3'


class CSVLoader {

  constructor({url, keys}) {
    this.url = url
    this.columns = keys.columns
  }

  getData() {
    let rows = this._getRows()
    let data = []
    data.push({
      key: 'Sparkasse',
      values: rows.map(r => {
        return {
          size: 0.5,
          x: parseInt(r.bilanzsumme_2014),
          y: parseInt(r.eigenkapital_2014)
        }
      })
    })
    return data
  }

  _getRows() {
    let rows = require('dsv!./sample.csv')
    return rows.map(r => {
      let row = {}
      for (let key of this.columns) {
        row[key] = r[key]
      }
      return row
    })

    // FIXME
    // return new Promise((resolve, reject) => {
    //   d3.csv(this.url)
    //     .row(r => {
    //       let row = {}
    //       for (let key of this.keys) {
    //         row[key] = r[key]
    //       }
    //       return row
    //     })
    //     .get((err, rows) => {
    //       if (err) {
    //         reject(Error("error loading data"))
    //       } else {
    //         resolve(rows)
    //       }
    //     })
    // })
  }

}


export default CSVLoader
