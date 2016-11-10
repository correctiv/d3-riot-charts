import baseChart from './base_chart.js'
import addTooltipEventsLine from '../utils/d3/add_tooltip_events_for_line.js'
import drawLine from '../utils/d3/draw/line.js'

export default class extends baseChart {
  constructor() {
    super()
    this.drawData = drawLine
    this.addEvents = addTooltipEventsLine
  }
}
