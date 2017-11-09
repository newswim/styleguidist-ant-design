const theme = require('./theme.js')
const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

// NOTE: Use 'util' to print a deeply nested object to console
// const util = require('util')

module.exports = {
  // components: './node_modules/antd/es/**/index.js',
  components: 'src/components/**/*.js',
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    webpackConfig = injectBabelPlugin(
      ['import', { libraryName: 'antd', style: true }],
      webpackConfig
    )
    webpackConfig = rewireLess.withLoaderOptions({
      modifyVars: theme
    })(webpackConfig, env)
    // console.log(util.inspect(webpackConfig, { showHidden: false, depth: null }))
    return webpackConfig
  }
}
