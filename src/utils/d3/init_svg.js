export default function({
  element,
  width,
  height,
  margin={
    top: 20,
    right: 20,
    bottom: 30,
    left: 30
  }
}){
  let svg = element.append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
  return svg
}
