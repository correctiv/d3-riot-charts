import baseChart from './base_chart.js'
import getMultiDomain from '../utils/d3/get_multi_domain.js'
import drawMultiLine from '../utils/d3/draw/multiline.js'

export default class extends baseChart {
  constructor() {
    super()
    this.getYDomain = getMultiDomain
    this.drawData = drawMultiLine
  }
}
