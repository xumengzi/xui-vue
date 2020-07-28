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
  chainWebpack: config =>{
    config.module
      .rule('js')
      .include
        .add('/fcbox-m-ui/plugins')
        .end()
      .use('babel')
        .loader('babel-loader')
  }
}