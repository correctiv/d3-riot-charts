import scatterChart from './scatter_chart.js'
import barChart from './bar_chart.js'
import Playbook from './base_playbook.js'

const PLAYBOOKS = {
  barChart: new Playbook(barChart),
  scatterChart: new Playbook(scatterChart)
}

const AVAILABLE_CHARTS = Object.keys(PLAYBOOKS)

module.exports = {AVAILABLE_CHARTS, PLAYBOOKS}
