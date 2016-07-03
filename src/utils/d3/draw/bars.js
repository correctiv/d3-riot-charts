export default function({
  height,
  data,
  xCol,
  yCol,
  xScale,
  yScale,
  svg
}) {
  svg.selectAll('.bar')
    .data(data)
    .enter().append('rect')
    .attr('class', this.cssClasses || 'bar')
    .attr('x', d => {
      return xScale(d[xCol])
    })
    .attr('width', xScale.bandwidth())
    .attr('y', d => {
      return yScale(d[yCol])
    })
    .attr('height', d => {
      return height - yScale(d[yCol])
    })
}
