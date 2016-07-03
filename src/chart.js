import getData from './loader.js'
import initSvg from './utils/d3/init_svg.js'
import getChartElement from './utils/get_chart_element.js'
import {PLAYBOOKS} from './playbooks/charts.js'

/**
 * available opts:
 * @param {string} elementId - id of html element,
 *    if this element doesn't exist, it will be created
 * @param {string} kind - kind of chart,
 *    check `AVAILABLE_CHARTS` from `./playbooks/charts.js`
 * @param {string} dataUrl - url to csv file, will be loaded via `PapaParse`
 * @param {number} width - overall width of chart svg
 * @param {number} height - overall height of chart svg
 * @param {string} xCol - csv column for x-Axis
 * @param {string} yCol - csv column for y-Axis
 * @param {string} sizeCol - csv column for calculating dot size (for `scatterChart`)
 *
 **/
class Chart {

  constructor(opts) {
    for (let prop in opts) {
      this[prop] = opts[prop]
    }
    this.playbook = PLAYBOOKS[this.kind]
    this._init()
  }

  render() {
    this.data.then(data => {
      this.data = data
      this.playbook.run(this)
    })
  }

  update() {

  }

  _init() {
    this.data = getData(this)
    this.element = getChartElement(this)
    this.svg = initSvg(this)
  }
}

export default Chart
