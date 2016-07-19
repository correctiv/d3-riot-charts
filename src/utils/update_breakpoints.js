// set breakpoint flags
export default (chart) => {
  let active = chart.breakpoints.find(b => {
    // we can do this because `breakpoints` at this time is an ordered array
    // of `breakpointItems` beginning with the smallest one
    return chart.width <= b.width
  }).name
  let activeClass = '-'+active

  let inactiveClasses = chart.breakpoints.filter(b => {
    return (b.name !== activeClass)
  }).map(b => {
    return '-'+b.name
  })

  // some convenient shorthands for breakpoints
  let isSmall = active === 'small'
  let isMedium = active === 'medium'
  let isLarge = active === 'large'

  chart.breakpoint = {
    active,
    activeClass,
    inactiveClasses,
    isSmall,
    isMedium,
    isLarge
  }

  chart.isSmall = isSmall
  chart.isMedium = isMedium
  chart.isLarge = isLarge
}
