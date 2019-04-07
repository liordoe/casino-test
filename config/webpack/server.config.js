const path = require('path');
const webpack = require('webpack');
const { defaultConfig, rootPath } = require('./defaults');
const _ = require('lodash');
const nodeExternals = require('webpack-node-externals');

const config = {
    mode: 'development',
    target: 'node',
    externals: [ nodeExternals() ],
    entry: {
        app: path.join(rootPath, 'server', 'server.ts'),
    },
    output: {
        filename: 'app.js',
        path: path.join(rootPath, 'build', 'server'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [ 'babel-loader', 'source-map-loader' ],
                exclude: /node_modules/,
                enforce: 'pre'
            }
        ]
    },
};

module.exports = _.merge({}, defaultConfig, config);
