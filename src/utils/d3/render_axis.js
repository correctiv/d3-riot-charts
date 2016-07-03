export default function(chart) {
  // FIXME
  let _axis = this.axis
  let axis = chart.svg.append('g')
    .attr('class', this.cssClass)
    .call(chart[_axis])

  if (_axis === 'xAxis') {
    axis.attr('transform', 'translate(0,' + chart.height + ')')
  }
}
