export default function({drawedSelection, tooltip}) {
  if (tooltip) {
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
