module.exports = {
  outputDir:'dist', //build输出目录
  assestsDir:'assets', //静态资源目录
  lintOnSave:false, //是否开启eslint
    devServer: {
      open:true, //是否自动弹出浏览器页面
      host:"localhost",
      port:'8080',
      https:false,
      hotOnly:false,
      proxy:null,
      proxy: {
        '/xhr': {
          target: 'http://you.163.com/',
          ws: true,
          changeOrigin: true
        },
        '/api': {
          target: 'http://you.163.com/xhr/',
          changeOrigin: true,
          pathRewrite: {
            '/api':''
          }
        }
      }
    }
  }