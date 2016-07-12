import renderTooltip from '../utils/render_tooltip.js'
import './raw_html.tag'

<riot-tooltip class="simple-charts__tooltip { -hidden: !data }" style={ opts.position }>
  <raw-html content={ rawContent }></raw-html>

  this.opts.control.on(riot.EVT.tooltipChanged, data => {
    this.update({
      data: data,
      rawContent: renderTooltip({
        data: data,
        tooltipTemplate: this.opts.template})
    })
  })

  this.opts.control.on(riot.EVT.unhilight, () => {
    this.update({data: null})
  })
</riot-tooltip>
