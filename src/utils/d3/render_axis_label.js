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
      .attr('y', 15)
      .style('text-anchor', 'end')
      .text(label)

    if (_y) {
      _label
        .attr('transform', 'rotate(-90)')
    } else {
      _label
        .attr('x', width)
    }
  }
}
