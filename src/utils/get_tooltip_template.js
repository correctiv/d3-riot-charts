import template from 'string-template'

const TOOLTIP_HEAD = '<div class="simple-charts__tooltip__head">{headTempl}</div>'
const TOOLTIP_BODY = '<div class="simple-charts__tooltip__data">{bodyTempl}</div>'
const DEFAULT_TEMPLATE = '<dl class="table"><dt>{xCol}</dt><dd>{xVar}</dd><dt>{yCol}</dt><dd>{yVar}</dd></dl>'

const varTmpl = (_var) => {
  return '{' + _var + '}'
}

export default function({
  tooltip,
  labelCol,
  xCol,
  yCol
}) {
  let {headTempl, bodyTempl} = tooltip
  if (!headTempl && !labelCol) {
    return template(TOOLTIP_BODY, {
      bodyTempl: template(DEFAULT_TEMPLATE, {
        xCol: xCol,
        yCol: yCol,
        xVar: varTmpl(xCol),
        yVar: varTmpl(yCol)
      })
    })
  } else {
    // merge templates with wrappers and concat
    let head = template(TOOLTIP_HEAD, {
      headTempl: headTempl ? headTempl : varTmpl(labelCol)
    })
    let body = bodyTempl ? template(TOOLTIP_BODY, {bodyTempl}) : ''
    return head + body
  }
}
