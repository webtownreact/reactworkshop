const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = (env) => {
  const isProductionMode = env.production;
  return {
    entry: './index.tsx',
    devtool: isProductionMode ? false : 'inline-source-map',
    mode: isProductionMode ? 'production' : 'development',
    output: {
      filename: isProductionMode ? '[name].[contenthash].js' : '[name].js',
      clean: true,
      publicPath: '/',
      // path: path.resolve(__dirname, 'frontend_dist'), // custom output directory
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(css|pcss)$/i,
          use: [
            isProductionMode ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            {
              loader: 'postcss-loader',
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './index.html' }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
      new WebpackManifestPlugin(),
      // new BundleAnalyzerPlugin(),
      new CompressionPlugin(),
      new FaviconsWebpackPlugin('./assets/images/hyperplane.svg'),

    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      historyApiFallback: true,
      open: true,
      hot: true,
      proxy: [
       {
           context: ['/backend'],
           target: 'http://localhost:3000/',
           secure: false,
           changeOrigin: true,
           pathRewrite: { '^/backend': '' },
         },
       ],
    },
  }
}
