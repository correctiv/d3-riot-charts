import template from 'string-template'

const TOOLTIP_WRAPPER = '<div class="simple-charts__tooltip">{content}</div>'

const TOOLTIP_HEAD = '<div class="simple-charts__tooltip__head">{content}</div>'

const TOOLTIP_BODY = '<div class="simple-charts__tooltip__data">{content}</div>'


const _format = (data, templString, wrapper) => {
  let content = template(templString, data)
  return template(wrapper, {content})
}


const _getMatchesFromTempl = (templ) => {
  let templRegExp = /\{(\w+)\}/g
  let matches = []
  let match = templRegExp.exec(templ)
  while (match != null) {
    matches.push(match[1])
    match = templRegExp.exec(templ)
  }
  return matches
}


const Tooltip = ({headTempl, bodyTempl, data}) => {
  let headContent = _format(data, headTempl, TOOLTIP_HEAD)
  let bodyContent = bodyTempl ? _format(data, bodyTempl, TOOLTIP_BODY) : ''
  let content = headContent+bodyContent
  return template(TOOLTIP_WRAPPER, {content})
}


const getTooltipCols = (tooltip) => {
  // extract all needed col names from tooltip templates
  // to get data for tooltip
  let {headTempl='', bodyTempl=''} = tooltip
  let headCols = _getMatchesFromTempl(headTempl)
  let bodyCols = _getMatchesFromTempl(bodyTempl)
  let cols = headCols.concat(bodyCols)
  let labelCol = tooltip.labelCol
  if (!(labelCol in cols)) {
    cols.push(labelCol)
  }
  return cols
}


export default {Tooltip, getTooltipCols}
