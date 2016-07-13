import template from 'string-template'

const TOOLTIP_HEAD = '<div class="simple-charts__tooltip__head">{headTempl}</div>'
const TOOLTIP_BODY = '<div class="simple-charts__tooltip__data">{bodyTempl}</div>'

export default function({
  tooltip,
  labelCol
}) {
  // bodyTempl is optional
  let {headTempl, bodyTempl} = tooltip
  if (!headTempl && !labelCol) {
    throw new Error('Tooltip: either "headTempl" or "labelCol" must be given')
  }
  if (!headTempl) {
    headTempl = '{'+labelCol+'}'
  }

  // merge templates with wrappers and concat
  let head = template(TOOLTIP_HEAD, {headTempl})
  let body = bodyTempl ? template(TOOLTIP_BODY, {bodyTempl}) : ''
  return head + body
}
