module.exports = {
  publicPath: './', // 基本路径
  devServer : { // api反向代理
    port : 8080,
    headers : {
      'demo_title' : 'ych_bilibili'
    },
    proxy : {
      '/api' : {
        target : 'http://192.168.3.147:3000',
        changeOrigin : true,
        pathRewrite : {
          '^/api' : ''
        }
      }
    }
  }
}