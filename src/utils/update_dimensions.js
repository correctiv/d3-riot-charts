import getWidth from './get_window_width.js'

// compute chart dimensions (for use on resize)
// return whether to perform resize or not (boolean)
// @param {object} chart - chart instance from `chart.js`
export default function(chart) {
  let width = getWidth()

  // wrapper is smaller than origin width
  if (chart._originWrapperWidth > width) {
    chart.wrapperWidth = width
    chart.wrapperHeight = chart._getWrapperHeight(width)
    chart.width = chart._getSvgWidth(width)
    chart.height = chart._getSvgHeight(chart.wrapperHeight)
    // do resize
    return true

  // wrapper is equal or bigger than origin width
  } else {
    // restore originals
    if (!(chart.width === chart._originWidth)) {
      chart.width = chart._originWidth
      chart.height = chart._originHeight
      chart.wrapperWidth = chart._originWrapperWidth
      chart.wrapperHeight = chart._originWrapperHeight
      // resize
      return true

    // don't resize
    } else {
      return false
    }
  }
}
