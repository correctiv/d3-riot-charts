export default function({
  drawedSelection,
  tooltip,
  search
}) {
  if (tooltip) {
    // we need ids for events
    drawedSelection
      .attr('id', (d, i) => {
        return search.idCol ? d[search.idCol] : i
      })
    drawedSelection
      .on('mouseover', d => {
        riot.control.trigger(riot.EVT.hilight, d)
      })
    drawedSelection
      .on('mouseout', () => {
        riot.control.trigger(riot.EVT.hilightOff)
      })
  }
}
