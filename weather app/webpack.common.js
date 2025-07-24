const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./[name].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    liveReload: true,
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all",
        },
      },
      minSize: 0,
    },
  },
  //DELETE IF YOU SEE ERROR
  performance: {
    maxAssetSize: 500 * 1024, // 500 KB
    maxEntrypointSize: 500 * 1024, // Optional: limit entrypoint size as well
    hints: "warning", // or 'error' to fail the build
  },
  //------ -- -- - -- -- -- - --- - -
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "./assets/[name][ext]",
        },
      },
      {
        test: /\.svg$/,
        type: "asset",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Weather App",
      filename: "index.html",
      favicon: "./src/assets/favicon.svg",
      template: "src/index.html",
      chunks: ["index"],
    }),
  ],
};
