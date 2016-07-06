// compute chart dimensions (for use on resize)
// return whether to perform resize or not (boolean)
// @param {object} that - chart instance from `chart.js`
export default function(that) {
  let {left, right} = that.margin
  let width = parseInt(that.element.style('width')) - left - right

  // wrapper is smaller than origin width
  if (that._originWidth > width) {
    that.width = width
    that.height = that._getHeight(that.width)
    // do resize
    return true

  // wrapper is equal or bigger than origin width
  } else {
    // restore originals
    if (!(that.width === that._originWidth)) {
      that.width = that._originWidth
      that.height = that._originHeight
      // resize
      return true

    // don't resize
    } else {
      return false
    }
  }
}
