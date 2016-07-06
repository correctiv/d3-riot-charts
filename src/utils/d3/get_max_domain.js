import {max} from '../../d3_packages.js'

export default function({
  data,
  xCol,
  yCol
}) {
  let col = this.col === 'y' ? yCol : xCol
  return [this.min, max(data, d => {
    return d[col]
  })]
}
