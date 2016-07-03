import baseChart from './base_chart.js'
import drawCircles from '../utils/d3/draw/circles.js'


export default class extends baseChart {
  constructor() {
    super()
    this.drawData = drawCircles
  }
}
