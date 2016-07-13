import {extent} from '../../d3_packages.js'

export default function({data, xCol, yCol}) {

  let col = this.col === 'xCol' ? xCol :
    this.col === 'yCol' ? yCol : null
  if (!col) {
    throw new Error(this.col+' is not a valid col identifier')
  }

  return extent(data, d => {
    return d[col]
  })

}
