const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js'
    ],
    mode: 'none',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        watchFiles: ['src/index.html']
    },
    plugins: [

        new HtmlWebpackPlugin({
            title: 'FediReader',
            template: 'src/index.html'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/i,
                use: ['style-loader', 'css-loader', "less-loader"],
            },
        ],
    },
};