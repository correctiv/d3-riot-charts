import updateBreakpointClasses from './update_breakpoint_classes.js'

export default ({
  element,
  wrapperWidth,
  wrapperHeight,
  breakpoint,
  isSmall
}) => {

  if (isSmall) {
    wrapperWidth = '100%'
    wrapperHeight = '100%'
  } else {
    wrapperWidth = wrapperWidth+'px'
    wrapperHeight = wrapperHeight+'px'
  }

  element
    .style('width', wrapperWidth)
    .style('height', wrapperHeight)

  updateBreakpointClasses({element, breakpoint})
}
