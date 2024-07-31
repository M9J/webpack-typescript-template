import path from "path";
import CopyPlugin from "copy-webpack-plugin";

export default {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "index.bundle.js",
    path: path.resolve("./dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/index.html", to: "" },
        { from: "./src/assets", to: "assets" },
      ],
    }),
  ],
};
