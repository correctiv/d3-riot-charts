import getExtentDomain from '../utils/d3/get_extent_domain.js'
import getScale from '../utils/d3/get_scale.js'
import getAxis from '../utils/d3/get_axis.js'
import renderAxis from '../utils/d3/render_axis.js'
import renderAxisLabel from '../utils/d3/render_axis_label.js'
import addTooltipEvents from '../utils/d3/add_tooltip_events.js'
import drawExtra from '../utils/d3/draw_extra.js'
import getColor from '../utils/d3/get_color.js'

export default class {
  constructor() {
    this.getXDomain = getExtentDomain.bind({col: 'xCol'})
    this.getYDomain = getExtentDomain.bind({col: 'yCol'})
    this.getXScale = getScale
    this.getYScale = getScale.bind({axis: 'y'})
    this.getXAxis = getAxis
    this.getYAxis = getAxis.bind({kind: 'axisLeft', axis: 'y'})
    this.renderXAxis = renderAxis.bind({cssClasses: 'x axis'})
    this.renderYAxis = renderAxis.bind({axis: 'y', cssClasses: 'y axis'})
    this.renderXLabel = renderAxisLabel
    this.renderYLabel = renderAxisLabel.bind({axis: 'y'})
    this.drawData = false  // to be specified in subclasses
    this.drawExtra = drawExtra
    this.addEvents = addTooltipEvents
    this.getColor = getColor
  }
}
