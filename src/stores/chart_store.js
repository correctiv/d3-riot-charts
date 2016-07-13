import './chart_store_events.js'
import getNodeFromSelection from '../utils/d3/get_node_from_selection.js'
import hilightNode from '../utils/hilight_node.js'
import unhilightNode from '../utils/unhilight_node.js'

export default class  {

  constructor() {
    riot.observable(this)
    this.bindEvents()

    // used vars
    this.hilightedNode
  }

  bindEvents() {
    // hilighting
    this.on(riot.EVT.hilight, data => {
      this.trigger(riot.EVT.tooltipChanged, data)
      // unhilight previously other path hilighted via riot searchbox
      this.trigger(riot.EVT.unhilightNode)
    })

    // find svg node and hilight it
    this.on(riot.EVT.hilightNode, data => {
      // first unhilight previous node
      this.trigger(riot.EVT.unhilightNode)

      let selection = this.drawedSelection
      this.hilightedNode = getNodeFromSelection({selection, data})
      hilightNode(this.hilightedNode)
      this.trigger(riot.EVT.tooltipChanged, data)
    })

    // unhilight all hilighted selections
    this.on(riot.EVT.unhilightNode, () => {
      if (this.hilightedNode) {
        unhilightNode(this.hilightedNode)
        this.hilightedNode = false
      }
    })

    this.on(riot.EVT.chartDrawed, drawedSelection => {
      this.drawedSelection = drawedSelection
      // TODO
      // remove loading class from wrapper
    })

    // clearSvg
    this.on(riot.EVT.clearSvg, () => {
      this.trigger(riot.EVT.unhilightNode)
    })
  }

}
