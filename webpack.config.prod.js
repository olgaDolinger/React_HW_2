import { registerLoader as MiniCssExtractPlugin } from "webpack";
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("path");

module.exports = {
  mode: "production",
  //context: path.join(__dirname, "src"), // ?
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "built"),
  },

  resolve: {
    modules: [path.resolve(__dirname, "./src"), "node_modules"],
    extensions: [".js", ".jsx", ".json"],
  },

  devServer: {
    contentBase: path.join(__dirname, "dev"),
    compress: true,
    port: 8000,
    open: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(ttf|svg|png)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]?[path]",
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(["prod"]),
    new HtmlWebpackPlugin({
      title: "React HW 2",
      template: "./src/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],

  watch: true,
};
