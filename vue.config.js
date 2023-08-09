const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port : 8080,
    host : "0.0.0.0",
    proxy: {
      '/': {
        // '/api' 로 들어오면 포트 8080(스프링 서버)로 proxy 처리
        target: 'http://localhost:8080',
        changeOrigin: true, // cross origin 허용
        ws : false
      }
    }
  }
})
