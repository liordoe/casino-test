const path = require('path');
const _ = require('lodash');
const { defaultConfig, rootPath } = require('./defaults');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

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
                    'sass-loader',
                ],
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
    ]
};

module.exports = _.merge({}, defaultConfig, config);
