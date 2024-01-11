const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/client/app.js",
  output: {
    libraryTarget: "var",
    library: "Client",
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "development",
  devtool: "source-map",
  stats: "verbose",
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    open: true,
    port: 8080,
    writeToDisk: true,
  },
  /* resolve: {
    extensions: [".ts", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    }, 
  },*/
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
      favicon: "./src/client/media/favicon.ico",
      filename: "index.html",
      hash: true,
    }),
    new CopyPlugin({
      patterns: [{ from: "src/client/media", to: "media" }],
    }),
  ],
};
