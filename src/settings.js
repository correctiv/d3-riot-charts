import 'd3'
import fillUpNestedObjects from './utils/fill_up_nested_objects'


const SETTINGS = {

  chart: {
    height: '400px',
    width: '100%',

    xAxis: {
      tickFormat: d3.format('.02f')
    },
    yAxis: {
      tickFormat: d3.format('.02f')
    },
    zoom: {
      active: false,
      extend: 100
    },
  }

}

function Opts(opts) {
  return fillUpNestedObjects(opts, SETTINGS)
}

export default Opts
