import {scaleLinear, scaleOrdinal, scaleBand, scaleLog} from '../../d3_packages.js'

const _scales = {
  scaleLinear,
  scaleOrdinal,
  scaleLog,
  scaleBand
}


export default function({
  height,
  width,
  xDomain,
  yDomain,
  xScaleNice,
  yScaleNice
}) {
  let _scale = _scales[this.kind] || scaleLinear
  let _y = this.axis === 'y'
  let range = _y ? [height, 0] : [0, width]
  let domain = _y ? yDomain : xDomain
  let nice = _y ? yScaleNice : xScaleNice
  let scale = _scale()
    .domain(domain)
    .range(range)

  if (nice && (scale.hasOwnProperty('nice'))) {
    return scale.nice()
  } else {
    return scale
  }
}
