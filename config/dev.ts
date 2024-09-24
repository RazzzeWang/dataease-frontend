/*
 * @Author: ze.wang@diact.com
 * @Date: 2024-09-23 15:16:29
 * @Function: Please Input Function
 */
export default {
  server: {
    proxy: {
      '/api/f': {
        target: 'https://demo.dataease.cn',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/f/, '')
      },
      // 使用 proxy 实例
      '/api': {
        target: 'https://demo.dataease.cn',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, 'de2api')
      }
    },
    port: 8080
  }
}
