export default class {
  constructor(playbook) {
    this.playbook = new playbook()
  }

  run(chart) {
    this._getDomains(chart)
    this._render(chart)
  }

  reRender(chart) {
    this._render(chart)
  }

  _render(chart) {
    this._getAxes(chart)
    this._draw(chart)
  }

  _getDomains(chart) {
    chart.xDomain = this.playbook.getXDomain(chart)
    chart.yDomain = this.playbook.getYDomain(chart)
  }

  _getAxes(chart) {
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
}
