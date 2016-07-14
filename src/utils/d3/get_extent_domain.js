import {extent} from '../../d3_packages.js'

export default function({
  data,
  xCol,
  yCol,
  xExtend,
  yExtend
}) {
  let y = this.col === 'yCol'
  let col = y ? yCol : xCol
  let _extend = y ? yExtend : xExtend

  if (_extend) {
    return _extend
  } else {
    return extent(data, d => {
      return d[col]
    })
  }
}
