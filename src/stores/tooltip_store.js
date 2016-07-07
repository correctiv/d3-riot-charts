import Riotcontrol from 'riotcontrol';
import './tooltip_store_events.js'

riot.control = Riotcontrol;

class TooltipStore {

  constructor() {
    riot.observable(this)
    this.bindEvents()
  }

  bindEvents() {
    // hilighting
    this.on(riot.EVT.hilight, data => {
      this.trigger(riot.EVT.tooltipChanged, data)
    })
  }

}

// add store to riot control
let tooltipStore = new TooltipStore()
riot.control.addStore(tooltipStore)
