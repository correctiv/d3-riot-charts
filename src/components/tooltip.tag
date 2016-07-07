import renderTooltip from '../utils/render_tooltip.js'
import './raw_html.tag'

<riot-tooltip
  style="top:{ opts.top }px;left:{ opts.left }px"
  class="simple-charts__tooltip { -hidden: !data }">
  <raw-html content={ rawContent }></raw-html>

  riot.control.on(riot.EVT.tooltipChanged, data => {
    this.update({
      data: data,
      rawContent: renderTooltip({
        data: data,
        tooltipTemplate: this.opts.tooltipTemplate})
    })
  })

  riot.control.on(riot.EVT.hilightOff, () => {
    this.update({data: null})
  })
</riot-tooltip>
