import 'nvd3'

const MODELS = {
  scatterChart: {
    chart: nv.models.scatterChart
  },
  discreteBarChart: {
    chart: nv.models.discreteBarChart
  }
}

const AVAILABLE_CHARTS = Object.keys(MODELS)

export default {MODELS, AVAILABLE_CHARTS}
