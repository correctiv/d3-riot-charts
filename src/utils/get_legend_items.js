export default ({
  groupCol,
  data,
  yCol,
  yCols,
  multiData,
  getColor
}) => {
  // if (!groupCol && !yCols && !yCol) {
  //   throw new Error('Legend: need either `groupCol` or `yCols`')
  // }

  if (groupCol) {
    let groups = []
    let items = []
    data.map(d => {
      let item = d[groupCol]
      if (groups.indexOf(item) < 0) {
        groups.push(item)
        items.push({
          label: item,
          color: getColor(d)
        })
      }
    })
    return items
  } else if (yCols) {
    // FIXME ?
    let {yValues} = multiData
    return yCols.map((c, i) => {
      return {
        label: c,
        color: getColor(yValues[i])
      }
    })
  } else if (yCol) {
    return [{
      label: yCol,
      color: getColor(data)
    }]
  }
}
