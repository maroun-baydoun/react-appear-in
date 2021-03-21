const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const PATHS = {
  src: resolve(__dirname, "./src"),
  dist: resolve(__dirname, "./dist"),
};

module.exports = {
  entry: {
    "react-appear-in": resolve(PATHS.src, "react-appear-in.tsx"),
  },
  output: {
    path: PATHS.dist,
    filename: "[name].js",
    library: "[name]",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx)/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  externals: {
    react: "react",
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        resolve(process.cwd(), "dist"),
        resolve(process.cwd(), "types"),
      ],
    }),
  ],
};
