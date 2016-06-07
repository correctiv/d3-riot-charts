import './less/main.less'

import CSVLoader from './data/loader'
import Chart from './charts'

let url = 'sample.csv'

let keys = {
  columns: ['bilanzsumme_2014', 'eigenkapital_2014', 'sparkasse']
}

let loader = new CSVLoader({url, keys})
let data = loader.getData()

let kind = 'scatterChart'
let opts = {}

let chart = new Chart({data, kind, opts})

chart.render()

