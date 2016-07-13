export default function({
  svgEl,
  svg,
  width,
  height,
  margin
}) {
  // update svg dimensions
  svgEl
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
  // remove all children to redraw chart with new dimensions
  svg
    .selectAll('*').remove()
    .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
}
