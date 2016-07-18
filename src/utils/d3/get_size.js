import {scaleLinear, extent} from '../../d3_packages.js'
// compute getSize function
export default ({
  data,
  sizeRange,
  sizeCol,
  size
}) => {
  if (sizeCol) {
    let domain = extent(data, d => {
      return d[sizeCol]
    })
    return scaleLinear()
      .domain(domain)
      .range(sizeRange)
  } else {
    return () => {
      return size
    }
  }
}


