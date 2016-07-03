import {AVAILABLE_CHARTS} from './playbooks/charts.js'
import Chart from './chart.js'

/**
 * generates the chart and puts it into given html selector
 *
 * see extended documentation in `chart.js`
 **/
export default function(opts) {

  // check for implementation
  if (AVAILABLE_CHARTS.indexOf(opts.kind) == -1) {
    throw new Error('chart type not implemented')
  }

  let chart = new Chart(opts)
  chart.render()
}
