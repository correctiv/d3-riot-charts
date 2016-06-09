import 'd3'
import fillUpNestedObjects from './utils/fill_up_nested_objects'


const _tickFormat = d3.format('.02f')


const SETTINGS = {

  chart: {
    height: '400px',
    width: '100%',

    showDistX: false,
    showDistY: false,
    useVoronoi: true,
    duration: 350,
    color: d3.scale.category10().range(),

    xAxis: {
      tickFormat: _tickFormat
    },
    yAxis: {
      tickFormat: _tickFormat
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
