import {scaleLinear, scaleOrdinal, scaleBand, scaleLog} from '../../d3_packages.js'

const _getScale = (kind) => {
  switch(kind) {
    case 'linear':
      return scaleLinear()
      break
    case 'logarithmic':
      return scaleLog()
      break
    case 'ordinal':
      return scaleOrdinal()
      break
    case 'band':
      return scaleBand()
      break
    default:
      throw new Error('scale '+kind+' not implemented')
  }
}

const _getRange = (axis, height, width) => {
  let range = axis === 'x' ? [0, width] :
    axis === 'y' ? [height, 0] : null

  if(!range) {
    throw new Error('axis '+axis+' not valid')
  }

  return range
}

const _getDomain = (axis, xDomain, yDomain) => {
  let domain = axis === 'x' ? xDomain :
    axis === 'y' ? yDomain : null

  if(!domain) {
    throw new Error('axis '+axis+' not valid')
  }

  return domain
}

export default function({
  height,
  width,
  xDomain,
  yDomain
}) {
  let scale = _getScale(this.kind)
  let range = _getRange(this.axis, xDomain, yDomain)
  scale
    .domain(_getDomain(this.axis, xDomain, yDomain))

  if (this.kind === 'ordinal') {
    scale.rangeRound(range, .1)
    console.log(scale)
  } else {
    scale.range(_getRange(this.axis, height, width))
  }

  if (this.nice) {
    return scale.nice()
  } else {
    return scale
  }
}
