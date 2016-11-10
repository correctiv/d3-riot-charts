import {line, curveBasis} from '../../../d3_packages.js'

export default function({
  curve,
  multiData,
  xCol,
  yCols,
  xScale,
  yScale,
  svg,
  getColor,
  yDomain
}) {

  let {xValues, yValues} = multiData

  let _line = line()
    .x((d, i) => {
      return xScale(xValues[i])
    })
    .y(yScale)

  if (curve) {
    _line.curve(curveBasis)
  }

  return svg.selectAll('.line')
      .data(yValues)
    .enter().append('path')
      .attr('class', 'line')
      .attr('d', _line)
      .style('stroke', d => {
        return getColor(d)
      })
}
