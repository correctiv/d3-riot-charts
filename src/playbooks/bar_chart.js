import baseChart from './base_chart.js'
import getOrdinalDomain from '../utils/d3/get_ordinal_domain.js'
import getMaxDomain from '../utils/d3/get_max_domain.js'
import getScale from '../utils/d3/get_scale.js'
import drawBars from '../utils/d3/draw/bars.js'

export default class extends baseChart {
  constructor() {
    super()
    this.getXDomain = getOrdinalDomain
    this.getYDomain = getMaxDomain.bind({col: 'y', min: 0})
    this.getXScale = getScale.bind({kind: 'scaleBand'})
    this.drawData = drawBars
  }
}
