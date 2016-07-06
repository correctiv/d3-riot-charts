import getData from './loader.js'
import initSvg from './utils/d3/init_svg.js'
import updateSvg from './utils/d3/update_svg.js'
import getChartElement from './utils/get_chart_element.js'
import {PLAYBOOKS} from './playbooks/charts.js'
import Settings from './playbooks/defaults.js'
import updateDimensions from './utils/update_dimensions.js'

/**
 * available opts:
 *
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
export default class {

  constructor(opts) {
    opts = Settings(opts)
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

  resize() {
    let doResize = updateDimensions(this)
    if (doResize) {
      updateSvg(this)
      this.playbook.reRender(this)
    }
  }

  _init() {
    this.data = getData(this)
    this.element = getChartElement(this)

    // fix dimensions
    let {height, width, margin} = this
    this.height = height - margin.top - margin.bottom
    this.width = width - margin.left - margin.right

    this.xTicksRatio = this.xTicks / this.width
    this.yTicksRatio = this.yTicks / this.height

    if (this.responsive) {
      this._setupResponsiveness()
    }

    this.svg = initSvg(this)
  }

  _setupResponsiveness() {
    // setup size ratio, preserve origin values
    let {height, width} = this
    this._sizeRatio = height / width
    this._originHeight = height
    this._originWidth = width
    this._getHeight = (width) => {
      return parseInt(width * this._sizeRatio)
    }
    window.addEventListener('resize', this.resize.bind(this))
    // select(window).on('resize', this.resize.bind(this))

    // maybe we have already a smaller window than the given values:
    updateDimensions(this)
  }

  _realWidth() {
    return this.width + this.margin.left + this.margin.right
  }

  _realHeight() {
    return this.height + this.margin.top + this.margin.bottom
  }
}
