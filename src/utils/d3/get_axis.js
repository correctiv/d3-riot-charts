import {axisLeft, axisRight, axisTop, axisBottom} from '../../d3_packages.js'

const _axes = {
  axisTop,
  axisBottom,
  axisRight,
  axisLeft
}

export default function({
  xScale,
  yScale
}) {
  let scale = this.axis === 'y' ? yScale : xScale
  let axis = _axes[this.kind] || axisBottom
  return axis(scale)
}
