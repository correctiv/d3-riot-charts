// order elements via d3 `selection.order()`
export default ({
  element,
  svgEl,
  elements,
  elementsOrder
}) => {
  let parent = element.node()
  elementsOrder.map(el => {
    let _el = el === '__svg__' ? svgEl.node() : elements[el]
    if (_el) {
      parent.appendChild(_el)
    }
  })
}
