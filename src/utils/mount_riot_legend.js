import '../components/legend.tag'
import getPositionStr from '../utils/get_position_style_str.js'

/**
 * create element for riot legend & mount it
 **/
export default function({
  elementId,
  element,
  margin,
  legend,
  breakpoint,
  control
}) {
  let riotWrapperId = elementId+'-riot-legend-wrapper'
  let {
    position=margin,
    legendItems,
    cssClasses
  } = legend

  let legendSel = element
    .append('div')
    .attr('id', riotWrapperId)

  position = getPositionStr(position)

  riot.mount('div#'+riotWrapperId, 'riot-legend', {
    control,
    breakpoint,
    position,
    legendItems,
    cssClasses
  })

  return legendSel.node()
}
