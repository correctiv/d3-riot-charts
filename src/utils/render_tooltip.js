import template from 'string-template'

export default function({
  tooltipTemplate,
  data
}) {
  return template(tooltipTemplate, data)
}
