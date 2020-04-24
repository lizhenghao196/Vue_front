module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://47.93.148.192',
        changeOrigin: true
      }
    }
  }
}