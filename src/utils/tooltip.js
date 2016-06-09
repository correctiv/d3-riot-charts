import template from 'string-template'

const TOOLTIP_WRAPPER = '<div class="simple-charts__tooltip">{content}</div>'

const TOOLTIP_HEAD = '<span class="simple-charts__tooltip__head">{content}</span>'

const TOOLTIP_BODY = '<span class="simple-charts__tooltip__body">{content}</span>'


const _format = (args, templString, wrapper) => {
  let content = template(templString, args)
  return template(wrapper, {content})
}


const Tooltip = (args, {headTempl, bodyTempl}={}) => {
  // body is optional
  if (!headTempl) {
    headTempl = '{label}'
  }
  let headContent = _format(args, headTempl, TOOLTIP_HEAD)
  let bodyContent = bodyTempl ? _format(args, bodyTempl, TOOLTIP_BODY) : ''
  let content = headContent+bodyContent
  return template(TOOLTIP_WRAPPER, {content})
}

export default Tooltip
