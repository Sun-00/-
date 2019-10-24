module.exports = {
    devServer: {
      proxy: {
        '/xhr': {
          target: 'http://you.163.com/',
          ws: true,
          changeOrigin: true
        },
      }
    }
  }