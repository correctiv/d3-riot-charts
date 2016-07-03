import {axisLeft, axisRight, axisTop, axisBottom} from '../../d3_packages.js'

export default function(chart) {
  let scale = chart[this.scale]
  switch(this.orientation) {
    case 'top':
      return axisTop(scale)
      break
    case 'bottom':
      return axisBottom(scale)
      break
    case 'left':
      return axisLeft(scale)
      break
    case 'right':
      return axisRight(scale)
      break
    default:
      throw new Error('axis orientation '+this.orientation+' not implemented')
  }
}
