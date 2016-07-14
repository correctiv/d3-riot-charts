// draw some custom extra stuff
// chart.drawExtra (from settings) could either be
// a single function or an array of functions
//
// @param {object} chart - the `chart.js` instance after all other
//    rendering/drawing is happen. a drawFunc get's this whole object
//    so that it can access everything from the chart, like the `svg`,
//    the `data`, the scales e.g.
//
// @return {array} of the returns of one or more drawExtra-funcs
//    (as a convention they should return the drawed selection)
export default (chart) => {
  let drawExtra = chart.drawExtra

  let extraDrawedSelections = []

  if (drawExtra) {

    if (Array.isArray(drawExtra)) {
      for (let drawFunc of drawExtra) {
        extraDrawedSelections.push(drawFunc(chart))
      }
    }

    else if (typeof drawExtra === 'function') {
      extraDrawedSelections.push(drawExtra(chart))
    }

    else {
      throw new Error('drawExtra must be a function or an array of functions')
    }

    return extraDrawedSelections
  }
}
