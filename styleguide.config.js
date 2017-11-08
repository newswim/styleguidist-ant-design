const theme = require('./theme.js')
const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

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
    return webpackConfig
  }
}
