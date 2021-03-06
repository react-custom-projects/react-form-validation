// the following 2 lines is to merge common webpack configurations with this file
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const { cssSubDirectory } = require('./constants');

module.exports = (env, options) => {
	return merge(common(env, options), {
		optimization: {
			// minify the bundled js files
			minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()],
		},
		plugins: [
			// used to extract styles into separated stylesheet
			new MiniCssExtractPlugin({
				// used for main styles file
				filename: cssSubDirectory + '[name].[hash:8].css',
				// used for the lazy loaded component
				chunkFilename: cssSubDirectory + '[id].[hash:8].css',
			}),
		],
	});
};
