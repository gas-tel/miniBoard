const { defineConfig } = require('@vue/cli-service')
console.log("proxy");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        // '/api' 로 들어오면 포트 8080(스프링 서버)로 proxy 처리
        target: 'http://localhost:8080',
        changeOrigin: true // cross origin 허용
      }
    }
  }
})
