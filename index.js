module.exports = (str, opts) => {
  if (!Array.isArray(opts)) {
    opts = [opts]
  }
  return opts.reduce((prev, next) => {
    if (!next.pattern) {
      return prev
    }
    const pattern = new RegExp(next.pattern)
    return prev.replace(pattern, next.replacement)
  }, str)
}
