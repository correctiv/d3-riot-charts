export default function({
  svg,
  xAxis,
  yAxis,
  showXAxis,
  showYAxis,
  xTicksRatio,
  yTicksRatio,
  height,
  width,
  responsive
}) {
  let _y = this.axis === 'y'
  let showAxis = _y ? showYAxis : showXAxis

  if (showAxis) {
    let Axis = _y ? yAxis : xAxis

    if (responsive) {
      // adjust ticks to responsiveness
      let tickRatio = _y ? yTicksRatio : xTicksRatio
      let tickVal = _y ? height : width
      let ticks = Math.floor(tickVal*tickRatio)
      Axis.ticks(ticks)
    }

    let axis = svg.append('g')
      .attr('class', this.cssClasses)
      .call(Axis)

    // FIXME
    if (!_y) {
      axis.attr('transform', 'translate(0,' + height + ')')
    }
  }
}
