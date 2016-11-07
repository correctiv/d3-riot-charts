import {line} from '../../../d3_packages.js'

export default function({
  data,
  xCol,
  yCol,
  xScale,
  yScale,
  svg,
}) {
  let _line = line()
    .x(d => {
      return xScale(d[xCol])
    })
    .y(d => {
      return yScale(d[yCol])
    })

  return svg.append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('d', _line);
}
