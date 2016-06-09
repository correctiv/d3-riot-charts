import 'd3'
import 'nvd3'
import CSVLoader from './loader'
import Opts from './settings'
import getChartElement from './utils/get_chart_element'
import getZoomHandlers from './utils/zoom'


class Chart {

  constructor({element, data, kind, opts}) {
    this.element = element
    this.data = data
    this.kind = kind
    this.opts = opts
  }

  render() {
    this._initChart()
    this._initOpts()
    this._initAxes()
    this._initTooltip()

    // wait for promised data
    this.data.then((data) => {
      this.element.datum(data)
      this.element.call(this.chart)
      if (this.opts.zoom.active) {
        let {zoom, reset} = this._getZoomHandlers()
        this.element.call(zoom).on('dblclick.zoom', reset)
      }
      nv.utils.windowResize(this.chart.update)

      // TODO: do we need this?
      //
      // nv.addGraph(() => {
      //   return this.chart
      // })
    })
  }

  _initChart() {
    if (this.kind == 'scatterChart') {
      this.chart = nv.models.scatterChart()
    } else {
      throw Error('not implemented')
    }
  }

  _initOpts() {
    this.chart
      .showDistX(this.opts.showDistX)
      .showDistY(this.opts.showDistY)
      .duration(this.opts.duration)
      .useVoronoi(this.opts.useVoronoi)
      .color(this.opts.color)
  }

  _initAxes() {
    this.chart.xAxis.tickFormat(this.opts.xAxis.tickFormat)
    this.chart.yAxis.tickFormat(this.opts.yAxis.tickFormat)
  }

  _initTooltip() {
    this.chart.tooltip.contentGenerator(this.opts.tooltip.contentGenerator)
  }

  _getZoomHandlers() {
    let chart = this.chart
    let extend = this.opts.zoom.extend
    return getZoomHandlers({chart, extend})
  }
}

/**
 * generates the chart and puts it into given html selector
 *
 * @param {string} selector - html selector for use in `querySelector`,
 *    if this element doesn't exist, it will be created
 * @param {string} kind - kind of chart,
 *    currently only `scatterChart` implemented
 * @param {string} dataUrl - absolute url where to find data in csv
 * @param {object} chart - options for chart
 * @param {object} data - options for data
 *    {
 *      chart: chartOpts (see `settings.js` for defaults),
 *      data: {keys: [...]}
 *    }
 *
 **/
function renderChart({
  selector,
  kind,
  dataUrl,
  data,
  chart
}) {
  // fill missing opts with defaults
  let opts = Opts({data, chart})

  // get data
  let loader = new CSVLoader({url: dataUrl,
                              opts: opts.data})
  let csvData = loader.getData()

  // get or create html element
  let {height, width} = opts.chart
  let element = getChartElement(selector, {height, width})

  // get chart
  let nvChart = new Chart({element: element,
                         data: csvData,
                         kind: kind,
                         opts: opts.chart})

  // finally render
  nvChart.render()
}

export default renderChart
