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
  control
}) {
  let {
    position=margin,
    template
  } = tooltip

  let riotWrapperId = elementId+'-riot-tooltip-wrapper'

  let tooltipWrapper = element
    .append('div')
    .attr('id', riotWrapperId)

  position = getPositionStr(position)

  riot.mount('div#'+riotWrapperId, 'riot-tooltip', {template, position, control})
}
