import './less/main.less'

import showChart from './charts'


//example:
showChart({
  selector: '#example-scatter',
  kind: 'scatterChart',
  dataUrl: './data/sample.csv',
  opts: {
    chart: {
      height: '600px',
      showDistX: false
    },
    data: {
      keys: {
        columns: ['bilanzsumme_2014', 'eigenkapital_2014', 'sparkasse']
      }
    }
  }
})

