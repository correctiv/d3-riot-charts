const _ = v => v + 'px;'

// return computed element style string for absolute positions
export default ({
  top,
  right,
  bottom,
  left
}) => {
  let t = top ? 'top:' + _(top) : false
  let r = right ? 'right:' + _(right) : false
  let b = bottom ? 'bottom:' + _(bottom) : false
  let l = left ? 'left:' + _(left) : false
  return t&&l ? t+l : t&&r ? t+r : b&&l ? b+l : b&&r ? b+r : ''
}
