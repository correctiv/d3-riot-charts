import getWidth from './get_window_width.js'

// compute chart dimensions (for use on resize)
// return whether to perform resize or not (boolean)
// @param {object} that - chart instance from `chart.js`
export default function(that) {
  let width = getWidth()

  // wrapper is smaller than origin width
  if (that._originWrapperWidth > width) {
    that.wrapperWidth = width
    that.wrapperHeight = that._getWrapperHeight(width)
    that.width = that._getSvgWidth(width)
    that.height = that._getSvgHeight(that.wrapperHeight)
    // do resize
    return true

  // wrapper is equal or bigger than origin width
  } else {
    // restore originals
    if (!(that.width === that._originWrapperWidth)) {
      that.width = that._originWidth
      that.height = that._originHeight
      that.wrapperWidth = that._originWrapperWidth
      that.wrapperHeight = that._originWrapperHeight
      // resize
      return true

    // don't resize
    } else {
      return false
    }
  }
}
