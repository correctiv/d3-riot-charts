import {line, curveBasis} from '../../../d3_packages.js'

export default function({
  curve,
  data,
  xCol,
  yCol,
  xScale,
  yScale,
  svg,
  getColor
}) {
  let _line = line()
    .x(d => {
      return xScale(d[xCol])
    })
    .y(d => {
      return yScale(d[yCol])
    })

  if (curve) {
    _line.curve(curveBasis)
  }

  return svg.append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('d', _line)
      .style('stroke', d => {
        return getColor(d)
      })
}
