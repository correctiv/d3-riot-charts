// fix dimensions: use given width / height as overall sizes without margins
// setup wrapper dimensions to be at least as big as chart dimensions
export default (chart) => {
    let {
      height,
      width,
      wrapperWidth,
      wrapperHeight,
      margin
    } = chart

    chart.wrapperWidth = wrapperWidth < width ? width : wrapperWidth
    chart.wrapperHeight = wrapperHeight < height ? height : wrapperHeight

    chart.height = height - margin.top - margin.bottom
    chart.width = width - margin.left - margin.right
}
