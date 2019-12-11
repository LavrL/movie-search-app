const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpg|png)$/,
                use: {
                    loader: 'url-loader',
                },
            },
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        // move bundle.js to a folder instead the root
        path: path.resolve('./build'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    optimization: {
        minimize: false //Update this to true or false
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin(),
        // New plugin
        new HtmlWebpackPlugin({
            // injects bundle.js to our new index.html
            inject: true,
            // copys the content of the existing index.html to the new /build index.html
            template: path.resolve('./index.html'),
        }),
    ]
};