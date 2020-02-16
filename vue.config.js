module.exports = {
    devServer: {
        disableHostCheck: true,
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8081,
        https: false,
        hotOnly: false,
        proxy: {
            '/api/v1': {
                target: 'http://localhost:8080',
                changeOrigin: true
            }
        },
        before: (app) => {}
    }
}