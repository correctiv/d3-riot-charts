import {schemeCategory10} from '../d3_packages.js'
import fillUpNestedObjects from '../utils/fill_up_nested_objects.js'


const DEFAULTS = {
  width: 800,
  height: 500,
  margin: {
    top: 20,
    bottom: 30,
    left: 30,
    right: 20
  },
  showXAxis: true,
  showYAxis: true,
  xScaleNice: true,
  yScaleNice: true,
  responsive: true,
  responsiveSvg: false,
  xTicks: 10,
  yTicks: 10,
  color: schemeCategory10,
  tooltip: false,
  search: false
}

export default function(opts) {
  return fillUpNestedObjects(opts, DEFAULTS)
}
