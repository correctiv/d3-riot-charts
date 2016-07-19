// add some stuff to make a riot tag listen to responsiveness
export default (tag) => {
  // initial values on mount should maybe updated based on initial active breakpoint
  tag._originPosition = tag.opts.position
  tag.position = tag.opts.breakpoint.isSmall ? null : tag.opts.position

  // listen to resize
  tag.opts.control.on(riot.EVT.updatePositions, breakpoint => {
    breakpoint.isSmall ? tag.update({position: 0})  // FIXME must not be `null` to force update
      : tag.update({position: tag._originPosition})
  })
}
