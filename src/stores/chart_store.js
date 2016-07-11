import './chart_store_events.js'
import hilightSelection from '../utils/d3/hilight_selection.js'
import unhilightSelection from '../utils/d3/unhilight_selection.js'

export default class  {

  constructor() {
    riot.observable(this)
    this.bindEvents()
  }

  bindEvents() {
    // hilighting
    this.on(riot.EVT.hilight, data => {
      this.trigger(riot.EVT.tooltipChanged, data)
      // unhilight previously other path hilighted via riot searchbox
      this.trigger(riot.EVT.hilightPathOff)
    })

    // find svg path and hilight it
    this.on(riot.EVT.hilightPath, dataItem => {
      // FIXME
      // let drawedSelection = this.chart.drawedSelection
      // hilightSelection({drawedSelection, dataItem})
      this.trigger(riot.EVT.tooltipChanged, dataItem)
    })

    // unhilight all hilighted selections
    this.on(riot.EVT.hilightPathOff, () => {
      // unhilightSelection(this.chart.drawedSelection)
    })

    this.on(riot.EVT.chartReady, chart => {
      // TODO
      // remove loading class from wrapper
    })
  }

}
