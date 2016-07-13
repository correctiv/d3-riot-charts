// trigger riot clear event if clicked somewhere in svg element
export default ({
  svgEl,
  control
}) => {
  svgEl.on('click', () => {
    control.trigger(riot.EVT.clearSvg)
  })
}
