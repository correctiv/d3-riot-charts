import 'd3'
import {MODELS} from './nvd3_api'
import {getTooltipCols} from './utils/tooltip'


class CSVLoader {

  constructor({kind, url, opts, tooltip}) {
    this.model = MODELS[kind]
    this.url = url
    this.opts = opts
    this.tooltipCols = getTooltipCols(tooltip)
  }

  getData() {
    let {groupCol} = this.opts

    return new Promise((resolve) => {
      this._getRows().then((rows) => {
        let tooltipCols = this.tooltipCols
        let opts = this.opts

        if (opts.filter) {
          rows = rows.filter(opts.filter)
        }

        if (groupCol) {
          resolve(this.model.getGroupedData({rows, tooltipCols, opts}))
        } else {
          resolve(this.model.getSingleData({rows, tooltipCols, opts}))
        }
      })
    })
  }

  _getRows() {
    return new Promise((resolve, reject) => {
      d3.csv(this.url)
        .get((err, rows) => {
          if (err) {
            reject(new Error('error loading data'))
          } else {
            resolve(rows)
          }
        })
    })
  }

}


export default CSVLoader
