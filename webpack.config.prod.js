const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/client/app.js",
  output: {
    libraryTarget: "var",
    library: "Client",
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "production",
  devtool: "source-map",
  stats: "verbose",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "media/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
      hash: true,
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: "src/client/media", to: "media" }],
    }),
  ],
};
