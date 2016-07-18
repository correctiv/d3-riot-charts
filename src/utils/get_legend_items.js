export default ({
  groupCol,
  data,
  getColor
}) => {
  if (!groupCol) {
    throw new Error('Legend: need groupCol')
  }

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
}
