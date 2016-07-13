// return node of given selection matching with dataItem
export default ({
  selection,
  data
}) => {
  return selection.filter(d => {
    return d === data
  }).node()
}
