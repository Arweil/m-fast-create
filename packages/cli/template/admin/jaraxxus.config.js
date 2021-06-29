const path = require('path');

module.exports = {
  entry: 'src/index',
  bundleAnalyzerReport: false,
  devServer: {
    port: 9999,
    open: false,
  },
  css: {
    sourceMap: true,
    lessModifyVars: require('./theme'),
  }
}
