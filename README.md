# correctiv-simple-charts

kind of "request-driven" developement of a simple charts library as sort of a wrapper around `nvd3`

## usage

show a chart like this:
```javascript
showChart({
  selector: '#example-scatter',
  kind: 'scatterChart',
  dataUrl: './data/sample.csv',
  chart: {
    height: '600px',
    showDistX: false
  },
  data: {
    keys: {
      columns: ['bilanzsumme_2014', 'eigenkapital_2014', 'sparkasse']
    }
  }
})
```

## features

### charts

currently, only `nv.models.scatterChart` is implemented.

## developement

`npm install`

`npm run dev`

## build

`npm run build`

the build will be in the `./dist` folder
