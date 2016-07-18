import {schemeCategory10} from '../d3_packages.js'
import fillUpNestedObjects from '../utils/fill_up_nested_objects.js'

const DEFAULTS = {
  width: 800,
  height: 500,
  wrapperWidth: 800,
  wrapperHeight: 500,
  wrapperClass: 'simple-charts',
  margin: {
    top: 20,
    right: 20,
    bottom: 30,
    left: 30
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
  filter: false,
  tooltip: false,
  search: false,
  legend: false,
  clearSvg: true,
  drawExtra: false,
  sizeRange: [3, 8],
  size: 6,
  playbook: {}
}

export default opts => {
  return fillUpNestedObjects(opts, DEFAULTS)
}
