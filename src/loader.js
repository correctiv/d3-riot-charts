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


export default ({
  dataUrl,
  xCol,
  yCol,
  filter
}) => {
  return new Promise((resolve) => {
    _loadCsv(dataUrl).then((rows) => {
      if (filter) {
        rows = rows.filter(filter)
      }
      resolve(rows.filter(r => {
        // ensure data is present
        return (r[xCol] && r[yCol])
      }))
    }
    )
  })
}
