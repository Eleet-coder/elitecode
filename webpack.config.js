const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { node } = require("webpack");

// console.log('webpack.config.js process.env: ', process.env)

module.exports = (env) => ({
  // mode: process.env.NODE_ENV,

  mode: "development",
  entry: "./client/index.tsx",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,

        use: ["ts-loader"],
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.png/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".js", ".ts", ".tsx"],
    fallback: {
      fs: false,
      path: false,
      // path: require.resolve('path-browserify'),
    },
  },

  devServer: {
    historyApiFallback: true,
    static: {
      publicPath: "/build",
      directory: path.resolve(__dirname, "build"),
    },
    compress: true,
    hot: true,
    port: 8080,
    proxy: {
      "/": "http://localhost:3000",
    },
  },
  performance: {
    maxEntrypointSize: 5120000,
    maxAssetSize: 5120000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: path.resolve(__dirname, "./index.html"),
    }),
  ],
});
