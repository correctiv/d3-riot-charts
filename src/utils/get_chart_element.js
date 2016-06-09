import 'd3'

/**
 * return element to which a chart will be applied.
 * if element not in `document`, it will be created
 *
 * this takes only care of the wrapper class if the selector
 * element is not in the dom yet
 *
 * @param {string} selector - html querySelector
 * @param {string} wrapper - wrapper classname (for css and stuff)
 **/
function getChartElement(selector, {height, width}, wrapper='simple-charts') {
  let selection = d3.select(selector)
  if (selection.empty()) {
    let elParent = d3.select(wrapper)
    if (elParent.empty()) {
      elParent = d3.select('body').append('div').classed(wrapper, true)
    }
    selection = elParent.append('div').attr('id', selector.substr(1))
  }
  return selection.append('svg').attr('height', height)
                                .attr('width', width)
}


export default getChartElement
