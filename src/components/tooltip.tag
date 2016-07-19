import renderTooltip from '../utils/render_tooltip.js'
import makeResponsive from '../utils/tags/setup_responsive_tag.js'
import './raw_html.tag'

<riot-tooltip class="simple-charts__tooltip { -hidden: !data }" style={ position }>
  <raw-html content={ rawContent }></raw-html>

  makeResponsive(this)

  this.opts.control.on(riot.EVT.tooltipChanged, data => {
    this.update({
      data: data,
      rawContent: renderTooltip({
        data: data,
        tooltipTemplate: this.opts.template})
    })
  })

  this.opts.control.on(riot.EVT.unhilight + ' ' + riot.EVT.clearSvg, () => {
    this.update({data: null})
  })
</riot-tooltip>
