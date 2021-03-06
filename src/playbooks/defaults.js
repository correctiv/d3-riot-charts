import Immutable from 'immutable'
import {schemeCategory10} from '../d3_packages.js'

const DEFAULTS = Immutable.Map({
  width: 800,
  height: 500,
  wrapperWidth: 800,
  wrapperHeight: 500,
  wrapperClass: 'simple-charts',
  margin: Immutable.Map({
    top: 20,
    right: 20,
    bottom: 30,
    left: 30
  }),
  showXAxis: true,
  showYAxis: true,
  showXLabel: true,
  showYLabel: true,
  xCol: 'x',
  yCol: 'y',
  yCols: false,
  xScaleNice: true,
  yScaleNice: true,
  responsive: true,
  responsiveSvg: false,
  xTicks: 10,
  yTicks: 10,
  curve: false,
  color: schemeCategory10,
  timeFormat: false,
  filter: false,
  tooltip: false,
  search: false,
  legend: false,
  annotation: false,
  clearSvg: true,
  drawExtra: false,
  sizeRange: [3, 8],
  size: 6,
  playbook: Immutable.Map({}),
  breakpoints: Immutable.Map({
    small: 480,
    medium: 768,
    large: 1280
  }),
  elements: Immutable.Map({}),
  elementsOrder: ['searchbox', 'legend', '__svg__',  'annotation', 'tooltip']
})

export default opts => {
  return DEFAULTS.merge(opts).toJS()
}
