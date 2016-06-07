// add zoom handler
// https://jsfiddle.net/u7efesL4/
function getZoomHandlers({chart, extend}) {
  let scaleExtent = extend
  let xScale = chart.xAxis.scale()
  let yScale = chart.yAxis.scale()
  let xDomain = chart.xDomain || xScale.domain
  let yDomain = chart.yDomain || yScale.domain
  let redraw = () => {
    chart.update()
  }

  // min/max boundaries
  let x_boundary = xScale.domain().slice()
  let y_boundary = yScale.domain().slice()

  // create d3 zoom handler
  let d3zoom = d3.behavior.zoom()

  // ensure nice axis
  xScale.nice()
  yScale.nice()

  // fix domain
  function fixDomain(domain, boundary) {
    // if (discrete) {
    //   domain[0] = parseInt(domain[0])
    //   domain[1] = parseInt(domain[1])
    // }
    domain[0] = Math.min(Math.max(domain[0], boundary[0]), boundary[1] - boundary[1] / scaleExtent)
    domain[1] = Math.max(boundary[0] + boundary[1] / scaleExtent, Math.min(domain[1], boundary[1]))
    return domain
  }

  // zoom event handler
  function zoomed() {
    yDomain(fixDomain(yScale.domain(), y_boundary))
    xDomain(fixDomain(xScale.domain(), x_boundary))
    redraw()
  }

  // zoom event handler
  function unzoomed() {
    xDomain(x_boundary)
    yDomain(y_boundary)
    redraw()
    d3zoom.scale(1)
    d3zoom.translate([0, 0])
  }

  // initialize wrapper
  d3zoom
    .x(xScale)
    .y(yScale)
    .scaleExtent([1, scaleExtent])
    .on('zoom', zoomed)

  // return handlers
  return {
    zoom: d3zoom,
    reset: unzoomed
  }
}


export default getZoomHandlers
