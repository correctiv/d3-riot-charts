export default function({
  data,
  xCol,
  yCol
}) {
  let col = this.col === 'y' ? yCol : xCol
  return data.map(d => {
    return d[col]
  })
}
