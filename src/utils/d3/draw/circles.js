import {scaleLinear, extent} from '../../../d3_packages.js'

const _sizeRange = [2, 7]
const _getSize = (data, col) => {
  if (col) {
    let domain = extent(data, d => {
      return d[col]
    })
    return scaleLinear()
      .domain(domain)
      .range(_sizeRange)
  } else {
    return () => {
      return 3
    }
  }
}


export default function({
  data,
  sizeCol,
  xCol,
  yCol,
  xScale,
  yScale,
  svg,
  getColor
}) {
  let getSize = _getSize(data, sizeCol)
  return svg.selectAll('.dot')
    .data(data)
    .enter().append('circle')
    .attr('class', this.cssClasses || 'dot')
    .attr('r', d => {
      return getSize(d[sizeCol])
    })
    .attr('cx', d => {
      return xScale(d[xCol])
    })
    .attr('cy', d => {
      return yScale(d[yCol])
    })
    .style('fill', d => {
      return getColor(d)
    })
}
