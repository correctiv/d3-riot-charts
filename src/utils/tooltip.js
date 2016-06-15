import template from 'string-template'

const TOOLTIP_WRAPPER = '<div class="simple-charts__tooltip">{content}</div>'

const TOOLTIP_HEAD = '<div class="simple-charts__tooltip__head">{content}</div>'

const TOOLTIP_BODY = '<div class="simple-charts__tooltip__data">{content}</div>'


const _format = (data, templString, wrapper) => {
  let content = template(templString, data)
  return template(wrapper, {content})
}


const Tooltip = ({headTempl, bodyTempl, data}) => {
  let headContent = _format(data, headTempl, TOOLTIP_HEAD)
  let bodyContent = bodyTempl ? _format(data, bodyTempl, TOOLTIP_BODY) : ''
  let content = headContent+bodyContent
  return template(TOOLTIP_WRAPPER, {content})
}

export default Tooltip
