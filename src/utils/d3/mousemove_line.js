// http://bl.ocks.org/mbostock/3902569
import {bisector, invert, mouse} from '../../d3_packages.js'

function mousemove() {
  // FIXME refactor this: initialize this func to chart in general
  let {data, xCol, yCol, xScale, yScale, overlay, focus, control} = this

  let bisect = bisector(d => {
    return d[xCol]
  }).left
  let x0 = xScale.invert(mouse(overlay.node())[0])
  let i = bisect(data, x0, 1)
  let d0 = data[i - 1]
  let d1 = data[i]
  let d = x0 - d0[xCol] > d1[xCol] - x0 ? d1 : d0 // FIXME error on highest x
  focus.attr('transform', 'translate(' + xScale(d[xCol]) + ',' + yScale(d[yCol]) + ')')
  control.trigger(riot.EVT.hilight, d)
}

export default mousemove
