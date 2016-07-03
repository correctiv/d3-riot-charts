import getExtentDomain from '../utils/d3/get_extent_domain.js'
import getScale from '../utils/d3/get_scale.js'
import getAxis from '../utils/d3/get_axis.js'
import renderAxis from '../utils/d3/render_axis.js'

export default class {
  constructor() {
    this.getXDomain = getExtentDomain.bind({col: 'xCol'})
    this.getYDomain = getExtentDomain.bind({col: 'yCol'})
    this.getXScale = getScale.bind({kind: 'linear', axis: 'x', nice: true})
    this.getYScale = getScale.bind({kind: 'linear', axis: 'y', nice: true})
    this.getXAxis = getAxis.bind({orientation: 'bottom', scale: 'xScale'})
    this.getYAxis = getAxis.bind({orientation: 'left', scale: 'yScale'})
    this.renderXAxis = renderAxis.bind({axis: 'xAxis', cssClass: 'x axis'})
    this.renderYAxis = renderAxis.bind({axis: 'yAxis', cssClass: 'y axis'})
  }
}
