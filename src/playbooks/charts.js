import scatterChart from './scatter_chart.js'

class Playbook {

  constructor(playbook) {
    this.playbook = new playbook()
  }

  _setup(chart) {
    chart.xDomain = this.playbook.getXDomain(chart)
    chart.yDomain = this.playbook.getYDomain(chart)
    chart.xScale = this.playbook.getXScale(chart)
    chart.yScale = this.playbook.getYScale(chart)
    chart.xAxis = this.playbook.getXAxis(chart)
    chart.yAxis = this.playbook.getYAxis(chart)
  }

  _draw(chart) {
    this.playbook.renderXAxis(chart)
    this.playbook.renderYAxis(chart)
    this.playbook.drawData(chart)
  }

  run(chart) {
    this._setup(chart)
    this._draw(chart)
  }
}

const PLAYBOOKS = {
  scatterChart: new Playbook(scatterChart)
}

const AVAILABLE_CHARTS = Object.keys(PLAYBOOKS)

export default {AVAILABLE_CHARTS, PLAYBOOKS}
