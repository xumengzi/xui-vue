const webpack = require('webpack')
module.exports = {
  runtimeCompiler: true,
  publicPath: '.',
  outputDir: 'book',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    }
  },
  productionSourceMap: false,
  chainWebpack: config =>{
    config.module
      .rule('js')
      .include
        // .add('/xui-m-ui/plugins')
        .end()
      .use('babel')
        .loader('babel-loader')
  },
  configureWebpack: {
    plugins: [
      new webpack.BannerPlugin({
        banner: "hash:[hash], chunkhash:[chunkhash], name:[name], filebase:[filebase], query:[query], file:[file]"
      })
    ]
  }
};