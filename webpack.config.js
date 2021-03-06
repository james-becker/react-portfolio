var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  resolve: {
    extensions: ["", ".js", ".jsx", ".json"]
  },
  entry: [
    './app'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react","es2015"]
        }
      },
      {
        test: /\.css/,
        loaders: ["style","css"],
        include: __dirname + "/app"
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
