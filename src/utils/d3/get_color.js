import {scaleOrdinal} from '../../d3_packages.js'

/** compute getColor func
 *
 * @param color -
 *  a string, everything gets the same color
 *  an Array, this will compute a d3 scaleOrdinal to get the color (e.g. for group based data)
 *  a mapping (object), the color for the given value will be returned
 *  a callable - will just return as is
**/
export default function({color, groupCol}){

  if (typeof color === 'string') {
    return () => {
      return color
    }
  }

  else if (Array.isArray(color)) {
    let _getColor = scaleOrdinal(color)
    return (d) => {
      return _getColor(d[groupCol] || d)
    }
  }

  else if (color.constructor === Object) {
    if (!groupCol) {
      throw new Error('need groupCol for this color func')
    }

    return (d) => {
      return color[d[groupCol]]
    }
  }

  else if (typeof color === 'function') {
    return color
  }

  else {
    throw new Error('can\'t compute color function from '+color)
  }
}
