module.exports = {
    // publicPath: process.env.NODE_ENV,
    publicPath: "/",
    outputDir: 'dist',
    lintOnSave: true,
    runtimeCompiler: true, //关键点在这
    // 调整内部的 webpack 配置。
    // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/webpack.md
    chainWebpack: (config) => {

    },
    configureWebpack: (config) => {
        //https://blog.csdn.net/nihaoa50/article/details/83744989
        config.module.rules.push({
            test: /.md$/,
            loader: 'text-loader'
        })
    },
    // 配置 webpack-dev-server 行为。
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        // 查阅 https://github.com/vuejs/vue-doc-zh-cn/vue-cli/cli-service.md#配置代理
        proxy: null, // string | Object
        before: app => {
        }
    }
}
