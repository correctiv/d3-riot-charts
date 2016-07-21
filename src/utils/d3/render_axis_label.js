export default function({
  renderedXAxis,
  renderedYAxis,
  xLabel,
  yLabel,
  width
}) {
  let _y = this.axis == 'y'
  let axis = _y ? renderedYAxis : renderedXAxis

  if (axis) {
    let label = _y ? yLabel : xLabel
    let _label = axis.append('text')
      .attr('class', 'label')
      .style('text-anchor', 'end')
      .text(label)

    if (_y) {
      _label
        .attr('y', 15)
        .attr('transform', 'rotate(-90)')
    } else {
      _label
        .attr('y', -6)
        .attr('x', width)
    }
  }
}
