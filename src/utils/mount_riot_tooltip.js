import '../components/tooltip.tag'
import getPositionStr from '../utils/get_position_style_str.js'

/**
 * create element for riot tooltip & mount it
 **/
export default function({
  elementId,
  element,
  tooltip,
  margin,
  breakpoint,
  control
}) {
  let {
    position=margin,
    template
  } = tooltip

  let riotWrapperId = elementId+'-riot-tooltip-wrapper'

  // add tooltipWrapper
  let tooltipSel = element
    .append('div')
    .attr('id', riotWrapperId)

  position = getPositionStr(position)

  riot.mount('div#'+riotWrapperId, 'riot-tooltip', {
    breakpoint,
    template,
    position,
    control
  })

  return tooltipSel.node()
}
