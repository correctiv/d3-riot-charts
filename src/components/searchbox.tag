import format from 'string-template'
import makeResponsive from '../utils/tags/setup_responsive_tag.js'

<riot-searchbox class="simple-charts__searchbox" style={ position }>

  <label>{ opts.description }</label>
  <input type="text" oninput={ search } />
  <ul if={ results.length > 0 } class="simple-charts__searchbox__result-list">
    <li each={ results }
      onclick={ handleClick }
      onmouseover={ onMouseOver }>
      { label }
    </li>
  </ul>

  makeResponsive(this)

  this.results = []

  this.search = (e) => {
    let str = e.target.value.toLowerCase()
    if (str.length >= this.opts.thereshold) {
      let results = this.opts.doSearch(str)
      if (results.length == 1) {
        this.hilight(results[0])
      } else {
        this.results = results.map(r => {
          r.label = this.getResultLabel(r)
          return r
        })
      }
    } else if (str.length < this.opts.thereshold) {
      this.results = []
    }
  }

  this.hilight = (data, preserveResults=false) => {
    // clear list
    if (!preserveResults) {
      this.results = []
    }
    this.opts.control.trigger(riot.EVT.hilightNode, data)
  }

  this.handleClick = (e) => {
    let data = e.item
    this.hilight(data)
  }

  this.onMouseOver = (e) => {
    let data = e.item
    this.hilight(data, true)
  }

  this.getResultLabel = (r) => {
    if (this.opts.resultTempl) {
      return format(this.opts.resultTempl, r)
    } else {
      return r[this.opts.labelCol]
    }
  }

  this.opts.control.on(riot.EVT.clearSvg, () => {
    this.update({results: []})
  })

</riot-searchbox>
