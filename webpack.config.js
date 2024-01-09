const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/client/app.js",
  output: {
    libraryTarget: "var",
    library: "Client",
    filename: "bundle.js", // Specify the correct output filename
    path: path.resolve(__dirname, "./dist"), // Adjust the path as needed
  },
  mode: "development",
  devtool: "source-map",
  stats: "verbose",
  /* devServer: {
    contentBase: path.join(__dirname, "./dist"),
    publicPath: "./dist",
    port: 8080,
  }, */
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
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
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
      template: "./src/client/views/index.html",
      filename: "index.html",
      hash: true,
    }),
    new CleanWebpackPlugin(),
  ],
};
