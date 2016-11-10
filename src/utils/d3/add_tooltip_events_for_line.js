import mousemove from './mousemove_line.js'

export default function({
  svg,
  tooltip,
  control,
  width,
  height,
  xScale,
  yScale,
  xCol,
  yCol,
  data
  // clearSvg
}) {
  if (tooltip) {
    // FIXME: refactor / this should be done somewhere else
    let focus = svg.append('g')
      .attr('class', 'focus')
      .style('display', 'none')
    focus.append('circle')
      .attr('r', 4.5)
      .style('fill', 'steelblue')
      // .style('stroke', 'steelblue')

  let overlay = svg.append('rect')
    .attr('class', 'overlay')
    .attr('width', width)
    .attr('height', height)
    .style('fill', 'none')
    .style('pointer-events', 'all')
    .on('mouseover', () => {
      focus.style('display', null)
    })
    .on('mouseout', () => {
      focus.style('display', 'none')
    })
  overlay.on('mousemove', mousemove.bind({focus, overlay, xScale, yScale, data, xCol, yCol, control}))
    // if (clearSvg) {
    //   // for mobile devices: open tooltip on click,
    //   // but only if it's possible to clear it afterwards
    //   // (that's what the `clearSvg` flag is for)
    //   // FIXME: this obviously crashes with the `clearSvg` click event
    //   drawedSelection
    //     .on('touchstart', d => {
    //       control.trigger(riot.EVT.hilight, d)
    //     })
    // }
  }
}
