import 'd3'


class CSVLoader {

  constructor({url, opts}) {
    this.url = url
    this.columns = opts.keys.columns
  }

  getData() {
    // let rows = this._getRows().then((rows) => {
    let rows = this._getRows()
      let data = []
      data.push({
        key: 'Sparkasse',
        values: rows.map(r => {
          return {
            label: r.sparkasse,
            size: parseInt(r.bilanzsumme_2014),
            x: parseInt(r.bilanzsumme_2014),
            y: parseInt(r.eigenkapital_2014)
          }
        })
      })
      return data
    // })
  }

  _getRows() {
    // let dataRequire = 'dsv!'+this.url
    // let rows = require(dataRequire)
    let rows = require('dsv!./data/sample.csv')
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
    //       for (let key of this.columns) {
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
