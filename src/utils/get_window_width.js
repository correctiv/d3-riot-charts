export default () => {
  let w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0]
    return w.innerWidth || e.clientWidth || g.clientWidth
}
