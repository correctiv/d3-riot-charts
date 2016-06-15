# correctiv-simple-charts

kind of "request-driven" developement of a simple charts library as sort of a wrapper around `nvd3` for use with reusable correctiv visualizations

## usage

show a chart like this:
```javascript
renderChart({
  selector: '#example-scatter',
  kind: 'scatterChart',
  dataUrl: '/data/sample.csv',
  chart: {
    height: '600px',
    showDistX: true,
    zoom: {
      active: true
    },
    tooltip: {
      labelCol: 'sparkasse',
      bodyTempl: '<dl>\
        <dt>Bilanzsumme 2014</dt><dd>{bilanzsumme_2014} €</dd>\
        <dt>Eigenkapital 2014</dt><dd>{eigenkapital_2014} €</dd></dl>'
    }
  },
  data: {
    xCol: 'bilanzsumme_2014',
    yCol: 'eigenkapital_2014'
  }
})
```

## features

### charts

currently, only `nv.models.scatterChart` is implemented.

## developement

`npm install`

`npm run dev`

starts a simple server at `localhost:1337` that serves the example `index.html` from the root directory of this project.

## build

`npm run build`

the minified build `correctiv-simple-charts.min.js` will be in the `./dist` folder
