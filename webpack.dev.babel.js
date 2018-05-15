/**
 * DEVELOPMENT WEBPACK CONFIGURATION
 */

const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const config = require('./webpack.config.babel');

module.exports = {
    mode: 'development',
    entry: config.entry,
    output: 
        {
            filename: '[name].js',
            path: config.output.path,
            publicPath: config.output.publicPath
        },
    module: config.module,
    devtool: 'source-map',
    devServer: {
        port: 3032,
        contentBase: Path.resolve(__dirname, "src"),
        stats: 'errors-only'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'public/index.html',
            favicon: 'public/favicon.ico',            
            inject: true,
        })
    ],
    resolve: config.resolve
};