const path = require('path');

module.exports = {
  mode: "production",
  entry: "./src/scss/index.scss",
  watch: true,
  module: {
    rules: [{
        test: /\.(scss)$/,
        use: [{
          loader: "file-loader",
          options: {
            name: "../css/index.css",
          }
        }, {
          loader: "extract-loader",
        }, {
          loader: "css-loader",
        }, {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [
                [
                  "autoprefixer", {}
                ]
              ]
            }
          }
        }, {
          loader: "sass-loader"
        }]
      },
      {
        test: /\.(png|jpg|svg|eot|ttf|woff)$/i,
        use: ["url-loader"]
      },
    ],
  },
};
