const webpack = require('webpack');

module.exports = {
	// Other webpack configuration settings
	resolve: {
		fallback: {
			stream: require.resolve('stream-browserify'),
		},
	},
	plugins: [
		new webpack.ProvidePlugin({
			process: 'process/browser',
		}),
	],
};
