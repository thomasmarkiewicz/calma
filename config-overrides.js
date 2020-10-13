const {
  override,
  disableEsLint,
  addBabelPreset,
  setWebpackOptimizationSplitChunks,
} = require('customize-cra');
const { addReactRefresh } = require('customize-cra-react-refresh');

module.exports = (...args) =>
  override(
    disableEsLint(),
    addBabelPreset('@emotion/babel-preset-css-prop'),
    addReactRefresh(),
    setWebpackOptimizationSplitChunks({
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        vendor: {
          // https://webpack.js.org/plugins/split-chunks-plugin/#split-chunks-example-3
          test: /[\\/]node_modules[\\/](react|react-dom|lodash|lodash-es|formik|react-datepicker|core-js|babel-preset-react-app|react-router|react-router-dom|date-fns|@emotion)[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    })
  )(...args);
