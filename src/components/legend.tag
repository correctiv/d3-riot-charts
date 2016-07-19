import makeResponsive from '../utils/tags/setup_responsive_tag.js'

<riot-legend class="simple-charts__legend { opts.cssClasses }" style={ position }>
  <ul class="simple-charts__legend__list">
    <li each={ opts.legendItems }>
      <span class="color" style="background-color:{ color };"></span>
      { label }
    </li>
  </ul>

  makeResponsive(this)

</riot-legend>


