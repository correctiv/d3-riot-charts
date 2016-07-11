// hilight selection with one node
// (triggered via riot)
// copy path, append it to svg parent, because of overlapping drawings
export default ({
  drawedSelection,
  dataItem
}) => {
  let selection = drawedSelection.filter(d => {
    return d === dataItem
  })
  let node = selection.node()
  node.classList.add('-hilighted')
  node.parentNode.appendChild(node)
}
