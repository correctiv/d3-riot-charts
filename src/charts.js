import {MODELS} from './nvd3_api/models'
import getZoomHandlers from './utils/zoom'
import {Tooltip} from './utils/tooltip'


class Chart {

  constructor({element, data, kind, opts}) {
    this.element = element
    this.data = data
    this.kind = kind
    this.opts = opts
    this.model = MODELS[this.kind]
  }

  render() {
    this._initChart()
    this._initOpts()

    this._initAxes()
    this._initTooltip()

    this.model.callX ? this.model.callX(this.chart) : null
    this.model.callY ? this.model.callY(this.chart) : null

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
      nv.addGraph(() => {
        return this.chart
      })
    })
  }

  _initChart() {
    this.chart = this.model.chart()
  }

  _initOpts() {
    this.chart.options(this.opts.nvd3)
  }

  _initAxes() {
    this.chart.xAxis.options(this.opts.xAxis)
    this.chart.yAxis.options(this.opts.yAxis)
  }

  _initTooltip() {
    // bodyTempl is optional
    let {headTempl=null, bodyTempl=null, labelCol=null} = this.opts.tooltip
    if (!headTempl && !labelCol) {
      throw new Error('either "headTempl" or "labelCol" must be given')
    }
    if (!headTempl) {
      headTempl = '{'+labelCol+'}'
    }

    let contentGenerator = (obj) => {
      // FIXME differences between different nvd3 implementations of this
      let data = obj[this.model.dataObj].data
      return Tooltip({headTempl, bodyTempl, data})
    }
    this.chart.tooltip.options({
      contentGenerator: contentGenerator
    })
  }

  _getZoomHandlers() {
    let chart = this.chart
    let extend = this.opts.zoom.extend
    return getZoomHandlers({chart, extend})
  }
}


export default Chart
