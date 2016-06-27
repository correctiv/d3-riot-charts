import 'nvd3'
import utils from './utils'

const {
  _getTooltipData,
  _getDataItem,
  _getSingleBarData,
  _getGroupedData,
  _groupedMultiItemFunc,
  _getGroupedMultiBarData,
  _getSingleData
} = utils

const MODELS = {

  /** SCATTER **/
  scatterChart: {
    chart: nv.models.scatterChart,

    /** getGroupedData **/
    getGroupedData: _getGroupedData,

    /** getSingleData **/
    getSingleData: _getSingleData,

    /** tooltip **/
    dataObj: 'point'
  },

  /** DISCRETE BAR **/
  discreteBarChart: {
    chart: nv.models.discreteBarChart,

    /** getSingleData **/
    getSingleData: _getSingleBarData,

    /** getGroupedData **/
    getGroupedData: function({rows, tooltipCols, opts}) {
      console.log(rows)
    },

    /** callX **/
    callX: function(chart) {
      chart.x(d => { return d.label })
    },

    /** callY **/
    callY: function(chart) {
      chart.y(d => { return d.value })
    },

    /** tooltip **/
    dataObj: 'data'
  },

  /** MULTIBAR **/
  multiBarChart: {
    chart: nv.models.multiBarChart,
    getGroupedData: _getGroupedMultiBarData,
    dataObj: 'data'
  },

  /** MULTIBAR HORIZONTAL **/
  multiBarHorizontalChart: {
    chart: nv.models.multiBarHorizontalChart,
    getGroupedData: _getGroupedMultiBarData,
    dataObj: 'data'
  }
}

const AVAILABLE_CHARTS = Object.keys(MODELS)

export default {MODELS, AVAILABLE_CHARTS}
