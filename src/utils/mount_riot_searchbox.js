import '../components/searchbox.tag'
import getPositionStr from '../utils/get_position_style_str.js'

/**
 * create element for riot tooltip & mount it
 **/
export default function({
  elementId,
  element,
  search,
  margin,
  control
}) {

  let riotWrapperId = elementId+'-riot-searchbox-wrapper'
  let {
    position=margin,
    thereshold=4,
    doSearch,
    description
  } = search

  element
    .append('div')
    .attr('id', riotWrapperId)

  position = getPositionStr(position)

  riot.mount('div#'+riotWrapperId, 'riot-searchbox', {position, thereshold, doSearch, description, control})
}
