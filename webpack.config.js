const path = require("path");

function buildPath(relative) {
  return path.join(__dirname, relative);
}

module.exports = function (env) {
  const isProduction = env.production === true;

  return {
    entry: "./js/src/app.js",
    output: {
      path: buildPath("public"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          loader: "babel-loader",
          test: /\.js$/,
          exclude: /node_modules/,
        },
        {
          use: ["style-loader", "css-loader", "sass-loader"],
          test: /output\.s?css$/,
        },
      ],
    },
    devtool: isProduction ? "source-map" : "eval-cheap-module-source-map",
    devServer: {
      static: {
        directory: buildPath("public"),
      },
      historyApiFallback: true,
    },
  };
};
