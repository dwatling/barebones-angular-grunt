var projectConfig = require('./project-config');
var webpack = require('webpack');
var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

var sourceDir = path.resolve(__dirname, projectConfig.srcDir);

var webpackConfig = {
	context: __dirname,
	entry: projectConfig.srcDir + 'scripts/boot.js',
	output: {
		path: path.join(__dirname, projectConfig.outputDir + 'web/js'),
        filename: 'bundle.js'
	},
	module: {
        preLoaders: [
			{ test: /\.js$/, loader: 'eslint-loader', include: sourceDir },
            { test: /\.html$/, loader: 'html-loader', include: sourceDir }
		],
        loaders: [
			
		]
    },
    devtool: 'source-map',
	plugins: [
        new ngAnnotatePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true
        })
	]
};

module.exports = webpackConfig;
