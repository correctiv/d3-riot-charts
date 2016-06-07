import 'd3'
import 'nvd3'
import Opts from './settings'
import getZoomHandlers from './utils'


class Chart {

  constructor({data, kind, opts}) {
    this.data = data
    this.kind = kind
    this.opts = new Opts(opts).getOpts()
  }

  render() {
    this._initChart()
    this._initAxes()
    this._initTooltip()
    this._initElement()
    this._applyData()


    this.element.call(this.chart)

    if (this.opts.zoom.active) {
      let {zoom, reset} = this._getZoomHandlers()
      this.element.call(zoom).on('dblclick.zoom', reset)
    }

    nv.utils.windowResize(this.chart.update)
    nv.addGraph(() => {
      return this.chart
    })
  }

  _applyData() {
    this.element.datum(this.data)
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

  _initElement() {
    this.element = this.opts.element.append('svg')
  }

  _getZoomHandlers() {
    let chart = this.chart
    let extend = this.opts.zoom.extend
    return getZoomHandlers({chart, extend})
  }
}


export default Chart
