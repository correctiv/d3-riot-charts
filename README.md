# d3-riot-charts

Kind of "request-driven" developement of a simple charts library as sort of a wrapper around `d3` (v4), extended with `riotjs` for use with reusable correctiv visualizations

Although this library has some pre-defined chart types, like `nvd3`, that can be rendered "out of the box", its main purpose is to offer a little framework to build custom charts. The main concept threfore are `playbooks`, which define the tasks and tasks order necessary to render a specific chart. The library offers default tasks for different chart types which can be overriden with custom tasks on a per-initialization level. Examples for this tasks are `getXDomain`, `renderYLabel` or whatever (see "playbooks"-section see below).

Currently, `barChart` and `scatterChart` are implemented as predefined chart types.

TODO: this documentation is far from ready, yet and doesn't explain all the features properly. It's just an overview for the moment.

## content
1. usage
2. general options
3. components
    1. legend
    2. tooltip
    3. search
4. responsiveness
5. playbooks
6. `drawExtra`

## usage

(TODO) see examples at `index.html`

the simplest `barChart` could be rendered like this:

```javascript
renderChart({
    kind: 'barChart',
    elementId: 'barchart-example',
    dataUrl: 'data/example.csv',
    xCol: 'name',
    yCol: 'value'
})
```

show a more complex chart like this:

[live example](https://correctiv.github.io/d3-riot-charts/faz-spk-vorstaende/durchschnittsgehalt1.html)

```javascript
var correctivColors = {
    red: '#c81455',
    blue: '#477ba9'
};

renderChart({
    kind: "scatterChart",
    elementId: "vorstaende-chart--1",
    dataUrl: "data/vorstaende/durchschnittsgehalt_scatter.csv",
    width: 800,
    height: 600,
    wrapperHeight: 640,
    xCol: "bemessung_2014",
    xScaleNice: false,
    xExtend: [0, 8.2],
    yCol: "durchschnitt_val",
    yScaleNice: false,
    yExtend: [0, 900],
    sizeCol: "mitarbeiter_2014",
    color: correctivColors.red,
    labelCol: "sparkasse",
    tooltip: {
        bodyTempl: "<dl class='table' style='width:300px;'>\
            <dt>Durchschnittsgehalt</dt><dd>{durchschnittsgehalt_2014}</dd>\
            <dt>Gesamtbezüge</dt><dd>{gesamtbezuege_2014}</dd>\
            <dt>Bilanzsumme</dt><dd>{bilanzsumme_2014}</dd>\
            <dt>Mitarbeiter</dt><dd>{mitarbeiter_2014}</dd>\
            <dt>Vorstände</dt><dd>{anzahl_vorstaende_2014}</dd></dl>",
        position: {
            bottom: 90,
            right: 20
        }
    },
    search: {
        searchCols: ["sparkasse", "plz"],
        position: {
            top: 20,
            right: 70
        },
        description: "Suche nach Deiner Sparkasse oder Postleitzahl",
        failMsg: "Leider wurde keine Sparkasse zu '{searchStr}' gefunden."
    },
    xLabel: "Größe der Sparkasse",
    yLabel: "Durchschnittliches Vorstandsgehalt in T. €",
    drawExtra: function(c) {
        c.svg.append("line")
            .attr("x1", c.xScale(7.8) - 5)
            .attr("y1", c.yScale(900))
            .attr("x2", c.xScale(7.8) - 5)
            .attr("y2", c.yScale(0) - 25)
            .style("stroke", "black")
            .style("stroke-width", "1")
            .style("stroke-dasharray", "10,10")
            .style("shape-rendering", "crispEdges");
        c.svg.append("text")
            .attr("y", c.yScale(900)+10)
            .attr("x", c.xScale(8) - 10)
            .style("font-size", "14px")
            .text("*");
        },
    annotation: {
        position: {
            bottom: 1,
            right: 20
        },
        content: "<div style='text-align:right;'>Je weiter rechts eine Sparkasse hier erscheint, desto größer ist sie. <a href='https://correctiv.org/recherchen/sparkassen/artikel/2016/07/21/datenauswertung-von-vorstandsgehaelter/'>So haben wir die Größe der Sparkassen berechnet</a><br>* Von diesen Sparkassen haben wir keine Daten zum Kreditvolumen. Deshalb konnten wir sie nicht in unsere Bemessungsgrundlage mit einbeziehen.</div>"
    }
});
```

## general options
TODO
```javascript
/**
 * available opts:
 *
 * see `playbooks/defaults.js` for defaults
 *
 * @param {string} elementId - id of html element,
 *    if this element doesn't exist, it will be created
 * @param {string} kind - kind of chart,
 *    check `AVAILABLE_CHARTS` from `./playbooks/charts.js`
 * @param {string} dataUrl - url to csv file, will be loaded via `PapaParse`
 * @param {number} width - overall width of chart svg
 * @param {number} height - overall height of chart svg
 * @param {number} wrapperWidth - width of wrapper element, default at least `width`
 * @param {number} wrapperHeight - height of wrapper element, default at least `height`
 * @param {string} wrapperClass - css class for wrapper element
 * @param {object} margin - margins for svg chart element
 * @param {string} xCol - csv column for x-Axis
 * @param {string} yCol - csv column for y-Axis
 * @param {boolean} showXAxis - whether to render x-Axis or not
 * @param {boolean} showYAxis - whether to render y-Axis or not
 * @param {boolean} xScaleNice - whether to call `.nice()` on xScale or not
 * @param {boolean} yScaleNice - whether to call `.nice()` on yScale or not
 * @param {boolean} responsive - whether to resize chart on window/container resize or not
 * @param {boolean} responsiveSvg - whether to use `preserveAspectRatio` on svg or not
 * @param {number} xTicks - how many ticks the x-Axis should have (reduced on smaller windows)
 * @param {number} yTicks - how many ticks the y-Axis should have (reduced on smaller windows)
 * @param {object, function, array, string} color - a color function, mapping, array or a single string value
 * @param {function} filter - a filter function that will be applied to each row while loading data
 * @param {object} or {boolean} tooltip - `headTempl` or `labelCol` and optional `bodyTempl` for tooltip rendering
 * @param {object} or {boolean} search - search settings, see examples
 * @param {object} or {boolean} legend - legend settings, see examples
 * @param {boolean} clearSvg - whether to add `clear` event for clicking on free svg space or not
 * @param {function} drawExtra - function or array of functions to apply on the svg to draw some extra stuff
 * @param {object} playbook - overrides for playbook for this chart
 *
 **/
```

### `scatterChart` specific options
TODO

```javascript
/**
 * @param {string} sizeCol - csv column for calculating dot size (for `scatterChart`)
 * @param {array} sizeRange - for scatters: smallest and biggest circle radius
 * @param {number} size - for scatters: fixed circle radius
 **/
```


## Components

### Legend

Add a simple legend to your chart in its initialization options like this:
```javascript
legend: true,
```
this will render a default legend box in the top left corner with distinct values from the `groupCol` and with the corresponding colors from the `color`-Setting (may be a function or a mapping or whatever.)

more legend options example:
```javascript
legend: {
    position: {
        top: 20,
        left: 55
    },
    cssClasses: "-boxed"
}
```

### Tooltip

Tooltips are disabled by default. Enable them with either `tooltip: true` or a more complex setting (see below).

The data hovering and tooltip rendering is handled by `riotjs` to allow much more stuff with it (integrate into a more complex app or whatever) or doing the "reverse direction of data hovering": find data points through search and display corresponding tooltip (see section "search" below).

#### tooltip templates

you can pass `headTempl` and `bodyTempl` as options for the tooltip, which can contain raw html and column names from the dataset in curly brackets, like this:

`<p class="value">Bilanzsumme: {bilanzsumme_2014}</p>`

this simple template rendering is implemented via [string-template](https://www.npmjs.com/package/string-template)

a complete example for rendering tooltips:
```javascript
tooltip: {
   bodyTempl: '<dl class="table">\
     <dt>Durchschnittsgehalt</dt><dd>{durchschnittsgehalt_2014}</dd>\
     <dt>Gesamtbezüge</dt><dd>{gesamtbezuege_2014}</dd>\
     <dt>Bilanzsumme</dt><dd>{bilanzsumme_2014}</dd>\
     <dt>Mitarbeiter</dt><dd>{mitarbeiter_2014}</dd>\
     <dt>Vorstände</dt><dd>{anzahl_vorstaende_2014}</dd></dl>',
   position: {
     bottom: 40,
     right: 20
   }
}
```

### Search

Search is disabled by default. Enable it like this:

TODO
```javascript
search: {
  searchCols: ["sparkasse", "plz"],
  position: {
    top: 20,
    right: 20
  },
  description: "Suche nach deiner Sparkasse oder Postleitzahl",
  failMsg: "Keine Ergebnisse für {searchStr}"
}
```

## Responsiveness

TODO: needs more doc

One main purpose is to offer easy handling of different screen sizes. Per default, the chart container resizes proportional on smaller screens.

There is also the `breakpoint` setting, which allows specific rendering options for specific screen sizes (per default on `small` the components get out of the chart container and are positioned above and below it).

```javascript
breakpoints: {
  small: 480,
  medium: 768,
  large: 1280
}
```

In customized functions (see sections `playbooks` and `drawExtra`) you can determinite which current breakpoint is active via `chart.breakpoint.active`

### responsiveSvg

there is also the option `responsiveSvg:true;` which will make the svg-part of the chart "native svg" resizable during initialisation of the svg container:
```javascript
svg
  .attr('preserveAspectRatio', 'xMinYMin meet')
  .attr('viewBox', '0 0 ' + width + ' ' + height)
  .classed('svg-content-responsive', true)
```

## Playbooks

TODO: more docs on this!!

This library is based on an (not yet really sophisticated) idea of "playbooks". Rendering charts is splitted up in minor tasks which can be customized. Currently the default playbook tasks are these:

```javascript
getXDomain
getYDomain
getXScale
getYScale
getXAxis
getYAxis
renderXAxis
renderYAxis
renderXLabel
renderYLabel
getColor
getSize
drawData  // this is specific per chart type
addEvents
drawExtra
```

Each task can be overriden during initialization. These functions are always getting one argument, the current instance of the chart that is being rendered, so one can access all attributes available at this step during the rendering process.

#### drawExtra

One task of the playbook you might want to set during initialization is `drawExtra`. This task is run at the end of the playbook, so you have access to all attributes of the chart, including `chart.data` of course. Use `drawExtra` to add specific drawing to your chart, like this:

```javascript
drawExtra: function(chart) {
  var y = chart.yScale(0.15);
  return {
    line: chart.svg.append('svg:line')
      .attr('x1', 0)
      .attr('y1', y)
      .attr('x2', chart.width)
      .attr('y2', y)
      .style('stroke', 'red'),
    label: chart.svg.append('text')
      .attr('class', 'quota-label')
      .attr('y', y - 5)
      .attr('x', 2)
      .text('Quotengrenze')
  };
}
```

## developement

`npm install`

`npm run dev`

starts a simple server at `localhost:1337` that serves the example `index.html` from the root directory of this project.

## build

`npm run build`

the minified build `d3-riot-charts.min.js` will be in the `./dist` folder
