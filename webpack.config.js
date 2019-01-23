const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const process = require('process');
const CssExtractor = {
	loader: MiniCssExtractPlugin.loader,
    options: {
		publicPath: '../'
    }
};

module.exports = {
	mode: process.env.NODE_ENV,
	entry: {
		main: path.resolve('src/main.js'),
	},
	output: {
		filename: '[name].js',
		path: path.resolve('./public/js'),
		libraryExport: 'default',
	},
	devServer: {
		contentBase: './public',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.css$/,
				use: [
					process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : CssExtractor,
					'css-loader',
				]
			},
			{
				test: /\.scss$/,
				use: [
					process.env.NODE_ENV !== 'production' ? 'vue-style-loader' : CssExtractor,
					'css-loader',
					'sass-loader',
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: '../css/styles.css',
		}),
	],
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'sass': path.resolve(__dirname, './src/sass/'),
		},
		extensions: ['*', '.js', '.vue', '.json']
	}
}