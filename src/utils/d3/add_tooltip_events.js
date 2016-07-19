export default function({
  drawedSelection,
  tooltip,
  control,
  clearSvg
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
    if (clearSvg) {
      // for mobile devices: open tooltip on click,
      // but only if it's possible to clear it afterwards
      // (that's what the `clearSvg` flag is for)
      // FIXME: this obviously crashes with the `clearSvg` click event
      drawedSelection
        .on('touchstart', d => {
          control.trigger(riot.EVT.hilight, d)
        })
    }
  }
}
