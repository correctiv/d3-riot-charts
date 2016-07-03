import {scaleLinear, extent} from '../../../d3_packages.js'

const _sizeRange = [2, 7]
const _getSize = (data, col) => {
  let domain = extent(data, d => {
    return d[col]
  })
  return scaleLinear()
    .domain(domain)
    .range(_sizeRange)
}


export default function(chart) {
  let getSize = _getSize(chart.data, chart.sizeCol)
  chart.svg.selectAll('.dot')
    .data(chart.data)
    .enter().append('circle')
    .attr('class', 'dot')
    .attr('r', d => {
      return getSize(d[chart.sizeCol])
    })
    .attr('cx', d => {
      return chart.xScale(d[chart.xCol])
    })
    .attr('cy', d => {
      return chart.yScale(d[chart.yCol])
    })
    // .style('fill')
}
