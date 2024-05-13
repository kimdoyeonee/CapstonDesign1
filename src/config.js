const { defineConfig } = require('@app/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // build 경로 설정
  outputDir: "../../IdeaProjects/spring.practice/src/main/resources/static",
  devServer: {
    // 프록시 설정
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }

})
