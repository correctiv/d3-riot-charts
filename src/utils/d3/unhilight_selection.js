// see `hilight_selection.js`
// because we copied the hilighted selection at the
// end of the dom, we can safely remove it from the dom now
export default (selection) => {
  selection.selectAll('.-hilighted').remove()
}
