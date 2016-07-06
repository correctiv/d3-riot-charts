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
  return svg
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
}
