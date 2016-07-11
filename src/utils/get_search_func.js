export default function({
  search,
  data
}) {
  // let {searchCols, idCol} = search
  // if (!searchCols || !idCol) {
  //   throw new Error('need "searchCols" and "idCol" to setup search')
  // }
  let {searchCols} = search

  // setup data
  data.map(d => {
    let searchString = ''
    for (let col of searchCols) {
      searchString = searchString + d[col]
    }
    d._searchString = searchString.toLowerCase()
  })

  let doSearch = (str) => {
    return data.filter(d => {
      return d._searchString.indexOf(str) > -1
    })
  }

  return doSearch
}
