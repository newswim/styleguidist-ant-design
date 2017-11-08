const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')
const theme = require('./theme.js')

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config)
  config = rewireLess.withLoaderOptions({
    modifyVars: theme
  })(config, env)
  return config
}
