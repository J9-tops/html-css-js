const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  resolve: {
    extensions: [".js"],
  },
};

module.exports = merge(commonConfig, devConfig);
