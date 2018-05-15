/**
 * BASE WEBPACK CONFIGURATION
 */

const Path = require('path');

module.exports = {
    entry: {
        main: Path.resolve(__dirname, 'src', 'index.jsx')
    },
    output: {
        path: Path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)?$/,
            loaders: ['babel-loader', 'eslint-loader'],
            include: [Path.resolve(__dirname, 'src')],
            exclude: /node_modules/
        }, {
            test: /\.(css|scss)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
            test: /\.json$/,
            use: 'json-loader',
        },
        {
            test: /\.(eot|svg|otf|ttf|woff|woff2)$/,
            loader: 'file-loader',
            options: {
                name: '[name].[ext]'
            }
            
        },
        {
            test: /\.(gif|png|jpe?g)$/i,
            use: [
                'file-loader?name=[name].[ext]',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                        },
                        optipng: {
                            enabled: true,
                        },
                        pngquant: {
                            quality: '65-90',
                            speed: 4
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        webp: {
                            quality: 75
                        }
                    }
                }
            ]
        },
        ]
    },
    resolve: {
        modules: [Path.resolve(__dirname, 'node_modules')],
        extensions: ['*', '.js', '.jsx']
    },
    performance: {
        hints: false,
    }
}