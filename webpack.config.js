// webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts', // or main.ts if that's what you'll call it
  module: {
    rules: [
      {
        test: /\.tsx?$/, // for .ts or .tsx files
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // final output directory
    clean: true, // clean /dist before build
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // points to your HTML template
    }),
  ],
  devServer: {
    static: './dist',
    open: true,
    port: 3000,
  },
  mode: 'development',
};
