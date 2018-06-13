const theme = require('./theme.js')
const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

// NOTE: ideally this would load directly from here:
// { components: './node_modules/antd/es/**/index.js' }
// However, for now I'm just manually copying the components and props
// hence, not all of them are available.

module.exports = {
  styleguideDir: 'docs',
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
