const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBUndleAnalyzer =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: {
    home: path.resolve(__dirname, "./src/js/home.js"),
    menu: path.resolve(__dirname, "./src/js/menu.js"),
    contact: path.resolve(__dirname, "./src/js/contact.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/[name].js",
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
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "./assets/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Resturant Page",
      filename: "index.html",
      favicon: "./src/assets/favicon.svg",
      template: "src/html/home.html",
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      title: "Our Menu",
      filename: "menu.html",
      favicon: "./src/assets/favicon.svg",
      template: "src/html/menu.html",
      chunks: ["menu"],
    }),
    new HtmlWebpackPlugin({
      title: "Contact Us",
      favicon: "./src/assets/favicon.svg",
      filename: "contact.html",
      template: "src/html/contact.html",
      chunks: ["contact"],
    }),
    new WebpackBUndleAnalyzer(),
  ],
};
