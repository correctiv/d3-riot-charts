export default function({
  data,
  sizeCol,
  xCol,
  yCol,
  xScale,
  yScale,
  svg,
  getColor,
  getSize
}) {
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
