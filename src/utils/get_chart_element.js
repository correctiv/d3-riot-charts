import {select} from '../d3_packages.js'

/**
 * return element to which a chart will be applied.
 * if element not in `document`, it will be created
 *
 * @param {string} elementId - id of html element
 * @param {string} wrapper - wrapper classname (for css and stuff)
 **/
export default function({elementId, wrapper='simple-charts'}) {
  let element = document.getElementById(elementId)
  if (!element) {
    element = select('body')
      .append('div')
      .attr('id', elementId)
  }
  element.classed(wrapper, true)
  return element
}
