import {select} from '../d3_packages.js'

/**
 * return element to which a chart will be applied.
 * if element not in `document`, it will be created
 *
 * @param {string} elementId - id of html element
 * @param {string} wrapper - wrapper classname (for css and stuff)
 **/
export default ({
  elementId,
  wrapperClass
}) => {
  let element = select('#'+elementId)
  if (element.empty()) {
    element = select('body')
      .append('div')
      .attr('id', elementId)
  }

  element.classed(wrapperClass, true)

  return element
}
