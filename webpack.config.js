const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: { app: './todo.js' },
    output: { filename: 'todo.build.js' },
    mode: 'development',
    module: {
        rules: [
            { test: /\.vue$/, exclude: /node_modules/, loader: 'vue-loader' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, use: ['vue-style-loader', 'css-loader'], exclude: /node_modules/ },
        ],
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        },
    },
    plugins: [new VueLoaderPlugin()],
};
