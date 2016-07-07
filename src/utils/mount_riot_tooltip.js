import '../components/tooltip.tag'

/**
 * create element for riot tooltip & mount it
 **/
export default function({
  elementId,
  element,
  tooltipTemplate
}) {
  let riotWrapperId = elementId+'-riot-tooltip-wrapper'
  let tooltipWrapper = element
    .append('div')
    .attr('id', riotWrapperId)
  riot.mount('div#'+riotWrapperId, 'riot-tooltip', {tooltipTemplate})
}
