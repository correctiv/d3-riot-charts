import '../components/searchbox.tag'

/**
 * create element for riot tooltip & mount it
 **/
export default function({
  elementId,
  element,
  search,
  margin
}) {

  let riotWrapperId = elementId+'-riot-searchbox-wrapper'
  let {
    top=margin.top,
    left=margin.left,
    thereshold=4,
    doSearch
  } = search

  element
    .append('div')
    .attr('id', riotWrapperId)
  riot.mount('div#'+riotWrapperId, 'riot-searchbox', {top, left, thereshold, doSearch})
}
