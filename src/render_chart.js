import Chart from './charts'
import Opts from './settings'
import CSVLoader from './loader'
import getChartElement from './utils/get_chart_element'

/**
 * generates the chart and puts it into given html selector
 *
 * @param {string} selector - html selector for use in `querySelector`,
 *    if this element doesn't exist, it will be created
 * @param {string} kind - kind of chart,
 *    currently only `scatterChart` implemented
 * @param {string} dataUrl - absolute url where to find data in csv
 * @param {object} chart - options for chart
 *    this object can have a child object, `nvd3`, that will be passed directly
 *    as options to the `nvd3` chart model and must only contain valid options
 *    for the given `kind` (see nvd3 reference)
 * @param {object} data - options for data loading
 *    {
 *      chart: chartOpts (see `settings.js` for defaults),
 *      data: {keys: [...]}
 *    }
 *
 **/
function renderChart({
  selector,
  kind,
  dataUrl,
  data,
  chart
}) {
  // fill missing opts with defaults
  let opts = Opts({data, chart})

  // get data
  let loader = new CSVLoader({url: dataUrl,
                              opts: opts.data,
                              tooltip: opts.chart.tooltip || {}})
  let csvData = loader.getData()

  // get or create html element
  let {height, width} = opts.chart
  let element = getChartElement(selector, {height, width})

  // get chart
  let nvChart = new Chart({element: element,
                           data: csvData,
                           kind: kind,
                           opts: opts.chart})

  // finally render
  nvChart.render()
}

export default renderChart
