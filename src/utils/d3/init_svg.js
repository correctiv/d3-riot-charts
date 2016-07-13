// init svg the first time
// @return svgEl as wrapper svg element (use for resizing if responsive)
//    and svg (which is the svgEl with a g appended, as a d3 convention)
export default function({
  element,
  width,
  height,
  margin,
  responsiveSvg
}){
  let svg = element.append('svg')

  if (responsiveSvg) {
    svg
      //responsive SVG needs these 2 attributes and no width and height attr
      .attr('preserveAspectRatio', 'xMinYMin meet')
      .attr('viewBox', '0 0 ' + width + ' ' + height)
      //class to make it responsive
      .classed('svg-content-responsive', true)
    element.classed('svg-container-responsive', true)
  } else {
    svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
  }
  return {
    svgEl: svg,
    svg: svg
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
  }
}
