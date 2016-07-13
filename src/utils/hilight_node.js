// add hilighted class to given node
// append it to parent to get it to front
// (for overlapping svg issues)
export default node => {
  node.classList.add('-hilighted')
  node.parentNode.appendChild(node)
}
