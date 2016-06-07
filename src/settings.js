import 'd3'


const _tickFormat = d3.format('.02f')


const SETTINGS = {

  chartDefaults: {
    showDistX: true,
    showDistY: true,
    useVoronoi: true,
    duration: 350,
    color: d3.scale.category10().range(),
    selector: 'div#correctiv-simple-chart',

    xAxis: {
      tickFormat: _tickFormat
    },
    yAxis: {
      tickFormat: _tickFormat
    },
    tooltip: {
      contentGenerator: (obj) => {
        return '<h3>' + obj + '</h3>'
      }
    },
    zoom: {
      active: true,
      extend: 100
    }
  }

}

class Opts {

  constructor(opts) {
    this.opts = opts
    this.defaults = SETTINGS.chartDefaults
  }

  getOpt(opt) {
    return this.opts[opt] || this.defaults[opt]
  }

  getOpts() {
    let opts = {}
    for (let key in this.defaults) {
      opts[key] = this.opts[key] || this.defaults[key]
    }
    return opts
  }

}


export default Opts
