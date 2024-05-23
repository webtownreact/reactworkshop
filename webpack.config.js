const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

module.exports = (env) => {
  const isProductionMode = env.production;
  return {
    entry: './index.tsx',
    mode: isProductionMode ? 'production' : 'development',
    output: {
      filename: '[name].[contenthash].js',
      clean: true,
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
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
      static: path.resolve(__dirname, 'dist'),
      open: true,
      hot: true,
    },
  }
}
