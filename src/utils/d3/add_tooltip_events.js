export default function({
  drawedSelection,
  tooltip,
  search,
  control
}) {
  if (tooltip) {
    drawedSelection
      .on('mouseover', d => {
        control.trigger(riot.EVT.hilight, d)
      })
    drawedSelection
      .on('mouseout', () => {
        control.trigger(riot.EVT.unhilight)
      })
  }
}
