import '../components/annotations.tag'
import getPositionStr from '../utils/get_position_style_str.js'

/**
 * create element for riot annotations & mount it
 **/
export default function({
  elementId,
  element,
  margin,
  annotation
}) {
  let riotWrapperId = elementId+'-riot-annotation-wrapper'
  let {
    position={
      bottom: margin.bottom,
      left: margin.left
    },
    content
  } = annotation

  element
    .append('div')
    .attr('id', riotWrapperId)

  position = getPositionStr(position)

  riot.mount('div#'+riotWrapperId, 'riot-annotation', {
    position,
    content
  })
}
