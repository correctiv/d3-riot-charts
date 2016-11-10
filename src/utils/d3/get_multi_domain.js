import {extent, min, max} from '../../d3_packages.js'

export default function({
  multiData,
  yExtend
}) {

  let extents = []
  multiData.yValues.forEach(v => {
    extent(v).forEach(e => {
      extents.push(e)
    })
  })

  if (yExtend) {
    return yExtend
  } else {
    return extent(extents)
  }
}
