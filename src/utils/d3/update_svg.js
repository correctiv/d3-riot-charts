export default function({
  svg,
  width,
  height,
  margin
}) {
  svg
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .selectAll('*').remove()
    .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
}
