const webpackNodeExternals =  require('webpack-node-externals');
const path = require('path');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');

const config = {
    //Inform webpack that bundle is meant for node server and not browser.
    target: 'node',
    //Tell entry point
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()]
};

module.exports = webpackMerge(baseConfig, config);