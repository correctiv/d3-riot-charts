// convert breakpoints into sorted array
export default ({breakpoints}) => {
  let _breakpoints = []
  for (let breakpoint in breakpoints) {
    let _breakpoint = {
      name: breakpoint,
      width: breakpoints[breakpoint]
    }
    _breakpoints.push(_breakpoint)
  }
  return _breakpoints.sort((a, b) => {
    return a.width - b.width
  })
}
