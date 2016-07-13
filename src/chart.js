import getData from './loader.js'
import initSvg from './utils/d3/init_svg.js'
import addSvgEvents from './utils/d3/add_svg_events.js'
import updateSvg from './utils/d3/update_svg.js'
import updateElement from './utils/update_element.js'
import getChartElement from './utils/get_chart_element.js'
import {PLAYBOOKS} from './playbooks/charts.js'
import Settings from './playbooks/defaults.js'
import updateDimensions from './utils/update_dimensions.js'
import getTooltipTemplate from './utils/get_tooltip_template.js'
import mountRiotTooltip from './utils/mount_riot_tooltip.js'
import getSearchFunc from './utils/get_search_func.js'
import mountRiotSearchbox from './utils/mount_riot_searchbox.js'
import ChartStore from './stores/chart_store.js'

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
 * @param {object} tooltip – `headTempl` or `labelCol` and optional `bodyTempl` for tooltip rendering
 *
 **/
export default class {

  constructor(opts) {
    opts = Settings(opts)
    for (let prop in opts) {
      this[prop] = opts[prop]
    }

    // start getting async data as soon as possible
    this.data = getData(this)

    // flux like store implemention but instanciated for this chart
    this.control = new ChartStore()

    this.playbook = PLAYBOOKS[this.kind]
    this._init()
  }

  render() {
    this.data.then(data => {
      this.data = data
      this.playbook.run(this)
      this.search ? this._setupSearch() : null
      this.control.trigger(riot.EVT.chartDrawed, this.drawedSelection)
    })
  }

  resize() {
    let doResize = updateDimensions(this)
    if (doResize) {
      updateElement(this)
      updateSvg(this)
      this.playbook.reRender(this)
      this.control.trigger(riot.EVT.chartDrawed, this.drawedSelection)
    }
  }

  _init() {

    // fix dimensions
    let {
      height,
      width,
      wrapperWidth,
      wrapperHeight,
      margin
    } = this

    this.wrapperWidth = wrapperWidth < width ? width : wrapperWidth
    this.wrapperHeight = wrapperHeight < height ? height : wrapperHeight

    this.height = height - margin.top - margin.bottom
    this.width = width - margin.left - margin.right

    this.xTicksRatio = this.xTicks / this.width
    this.yTicksRatio = this.yTicks / this.height

    if (this.responsive) {
      this._setupResponsiveness()
    }

    this.element = getChartElement(this)
    let {svgEl, svg} = initSvg(this)
    this.svg = svg
    this.svgEl = svgEl

    if (this.tooltip) {
      // FIXME
      if (typeof(this.tooltip) === 'boolean') {
        this.tooltip = {}
      }
      this._initTooltip()
    }

    if (this.clearSvg) {
      addSvgEvents(this)
    }

  }

  _setupResponsiveness() {
    // setup size ratio, preserve origin values
    let {
      width,
      height,
      wrapperWidth,
      wrapperHeight,
      margin
    } = this

    let {
      top,
      right,
      bottom,
      left
    } = margin

    this._originHeight = height
    this._originWidth = width

    this._svgWidthRatio = (width + left + right) / wrapperWidth
    this._getSvgWidth = (wrapperWidth) => {
      let wFix = this.margin.left + this.margin.right
      return parseInt(wrapperWidth * this._svgWidthRatio) - wFix
    }

    this._svgHeightRatio = (height + top + bottom) / wrapperHeight
    this._getSvgHeight = (wrapperHeight) => {
      let hFix = this.margin.top + this.margin.bottom
      return parseInt(wrapperHeight * this._svgHeightRatio) - hFix
    }

    this._wrapperSizeRatio = wrapperHeight / wrapperWidth
    this._originWrapperWidth = wrapperWidth
    this._originWrapperHeight = wrapperHeight
    this._getWrapperHeight = (wrapperWidth) => {
      return parseInt(wrapperWidth * this._wrapperSizeRatio)
    }

    window.addEventListener('resize', this.resize.bind(this))
    // select(window).on('resize', this.resize.bind(this))

    // maybe we have already a smaller window than the given values:
    updateDimensions(this)
  }

  _initTooltip() {
    this.tooltip.template = getTooltipTemplate(this)
    mountRiotTooltip(this)
  }

  _setupSearch() {
    this.search.doSearch = getSearchFunc(this)
    mountRiotSearchbox(this)
  }
}
