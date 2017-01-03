var webpack = require('webpack');

// css 剥离 js 文件, 将 css 单独打包。
var ExtractTextPlugin = require("extract-text-webpack-plugin");

// gzip 压缩
var CompressionWebpackPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader")}
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,  // remove all comments
            },
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('[name].css'),

        new CompressionWebpackPlugin({ //gzip 压    缩
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(js|css)$'    //压缩 js 与 css
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    ],
}