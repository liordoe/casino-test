const path = require('path');
const rootPath = process.env.PWD;
const defaultConfig = {
    devtool: 'inline-source-map',
    resolve: {
        extensions: [ '.tsx', '.ts', '.jsx', '.js', '.json' ],
        modules: [
            path.resolve(rootPath, 'node_modules'),
            path.resolve(rootPath, 'config'),
            path.resolve(rootPath, 'client'),
            path.resolve(rootPath, 'server'),
            path.resolve(rootPath, 'types'),
        ],
        alias: {
            config: path.resolve(rootPath, 'config'),
            client: path.resolve(rootPath, 'client'),
            server: path.resolve(rootPath, 'server'),
            types: path.resolve(rootPath, 'types'),
        }
    }
};

module.exports.defaultConfig = defaultConfig;
module.exports.rootPath = rootPath;
