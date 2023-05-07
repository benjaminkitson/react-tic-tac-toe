const path = require("path");

function buildPath(relative) {
  return path.join(__dirname, relative);
}

module.exports = function (env) {
  const isProduction = env.production === true;

  return {
    entry: "./ts/src/app.tsx",
    output: {
      path: buildPath("public"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          use: ["style-loader", "css-loader", "sass-loader"],
          test: /output\.s?css$/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
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
