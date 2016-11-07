import baseChart from './base_chart.js'
import drawLine from '../utils/d3/draw/line.js'

export default class extends baseChart {
  constructor() {
    super()
    this.drawData = drawLine
  }
}
