import Papa from 'papaparse'
import Promise from 'promise-polyfill'

function _loadCsv(dataUrl) {
  return new Promise((resolve, reject) => {
    Papa.parse(dataUrl, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (res) => {
        resolve(res.data)
      },
      error: (err, file) => {
        reject(new Error('PapaParse: couldn\'t get file: '+err))
      }
    })
  })
}


export default function({dataUrl, xCol, yCol}) {
  // export default function({dataUrl, opts, tooltip}) {
  // let {groupCol} = this.opts

  return new Promise((resolve) => {
    _loadCsv(dataUrl).then((rows) => {
      // let tooltipCols = this.tooltipCols
      // let opts = this.opts

      // if (opts.filter) {
      //   rows = rows.filter(opts.filter)
      // }

      // if (groupCol) {
      //   // resolve(this.model.getGroupedData({rows, tooltipCols, opts}))
      //   // throw new Error('not implemented')
      //   resolve(rows)
      // } else {
      resolve(rows.filter(r => {
        // ensure data is present
        return (r[xCol] && r[yCol])
      }))
    }
    )
  })
}
