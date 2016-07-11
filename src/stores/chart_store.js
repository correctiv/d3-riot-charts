import Riotcontrol from 'riotcontrol';
import './chart_store_events.js'

riot.control = Riotcontrol;

class ChartStore {

  constructor() {
    riot.observable(this)
    this.bindEvents()
  }

  bindEvents() {
    // hilighting
    this.on(riot.EVT.hilight, data => {
      this.trigger(riot.EVT.tooltipChanged, data)
    })

    // find svg path and hilight it
    this.on(riot.EVT.hilightPath, data => {
      let path = this.chart.drawedSelection.filter(e => {
        return e === data
      })
      path.style('stroke', 'red')
      path.style('stroke-width', 3)
      this.trigger(riot.EVT.tooltipChanged, data)
    })

    this.on(riot.EVT.chartReady, chart => {
      this.chart = chart
    })
  }

}

// add store to riot control
let chartStore = new ChartStore()

riot.control.addStore(chartStore)
