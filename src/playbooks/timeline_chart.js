import baseChart from './base_chart.js'
import getScale from '../utils/d3/get_scale.js'
import drawLine from '../utils/d3/draw/line.js'

export default class extends baseChart {
  constructor() {
    super()
    this.getXScale = getScale.bind({kind: 'scaleTime'})
    this.drawData = drawLine
  }
}
