# d3-riot-charts

kind of "request-driven" developement of a simple charts library as sort of a wrapper around `d3` (v4), extended with `riotjs` for use with reusable correctiv visualizations

## usage

show a chart like this:
```javascript
var correctivColors = {
    red: '#c81455',
    blue: '#477ba9'
};

renderChart({
    kind: 'barChart',
    elementId: 'vorstaende-chart--3',
    dataUrl: 'data/vorstaende/bezuege_quote_barchart.csv',
    width: 800,
    height: 400,
    xCol: 'name',
    yCol: 'bezuege_quote_zu_2013',
    showXAxis: false,
    color: function(d) {
        return d.state === 'Hessen' ? correctivColors.red : correctivColors.blue;
    },
    filter: function(d) {
        return (d.state === 'Nordrhein-Westfalen') || (d.state === 'Hessen')
    },
    labelCol: 'name',
    tooltip: {
        position: {
        top: 20,
        left: 55
        },
        bodyTempl: '<strong>{sparkasse}</strong>\
            <dl><dt>Quote</dt><dd>{bezuege_quote_str}</dd>\
            <dt>Grundgehalt 2013</dt><dd>{feste_bezuege_2013_str}</dd>\
            <dt>Erfolgsabhängige Bezüge 2014</dt><dd>{erfolgsabhaengige_bezuege_str}</dd>\
            <dt>Position</dt><dd>{position}</dd>\
            <dt>Bundesland</dt><dd>{state}</dd></dl>'
        },
    search: {
        searchCols: ['name', 'sparkasse'],
        position: {
            top: 20,
            right: 30
        },
        description: 'Gib einen Namen oder eine Sparkasse ein',
        resultTempl: '{name} ({sparkasse})'
    },
    yLabel: 'Anteil erfolgsabhängiger Bezüge am Grundgehalt in Prozent'
});
```

## features

### charts

- `scatterChart`
- `barChart`

## developement

`npm install`

`npm run dev`

starts a simple server at `localhost:1337` that serves the example `index.html` from the root directory of this project.

## build

`npm run build`

the minified build `correctiv-simple-charts.min.js` will be in the `./dist` folder
