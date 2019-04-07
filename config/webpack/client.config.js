const path = require('path');
const _ = require('lodash');
const { defaultConfig, rootPath } = require('./defaults');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    mode: 'development',
    target: 'web',
    entry: {
        app: path.join(rootPath, 'client', 'App.tsx'),
    },
    output: {
        filename: '[name].js',
        path: path.join(rootPath, 'build', 'client'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [ 'babel-loader', 'source-map-loader' ],
                exclude: /node_modules/,
                enforce: 'pre'
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3|ico)$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.html/,
                loader: 'file-loader?name=[name].[ext]',
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({}),
        new LiveReloadPlugin({
            appendScriptTag: true,
        }),
        new CopyWebpackPlugin([
            { from: './assets', to: 'assets' }
        ])
    ]
};

module.exports = _.merge({}, defaultConfig, config);
