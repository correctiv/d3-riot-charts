export default ({
  element,
  breakpoint
}) => {
  let {activeClass, inactiveClasses} = breakpoint
  inactiveClasses.map(c => {
    element.classed(c, false)
  })
  element.classed(activeClass, true)
}
