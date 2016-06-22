import 'd3'
import fillUpNestedObjects from './utils/fill_up_nested_objects'


const SETTINGS = {

  chart: {
    height: '400px',
    width: '100%',

    showDistX: false,
    showDistY: false,
    useVoronoi: true,
    duration: 350,
    color: d3.scale.category20().range(),

    xAxis: {
      tickFormat: '.02f'
    },
    yAxis: {
      tickFormat: '.02f'
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
