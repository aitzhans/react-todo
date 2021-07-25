const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
  const isProd = env.production;

  // eslint-disable-next-line arrow-body-style
  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader'
    ];
  };

  return {
    mode: isProd ? 'production' : 'development',

    output: {
      filename: isProd ? 'main-[hash:8].js' : undefined
    },

    module: {
      rules: [

        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },

        // Loading images
        {
          test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name]-[sha1:hash:7].[ext]'
              }
            }
          ]
        },

        // Loading fonts
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'fonts',
                name: '[name].[ext]'
              }
            }
          ]
        },

        // Loading CSS
        {
          test: /\.(css)$/,
          use: getStyleLoaders()
        },

        // Loading SASS/SCSS
        {
          test: /\.(s[ca]ss)$/,
          use: [ ...getStyleLoaders(), 'sass-loader' ]
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        title: 'React Todo App',
        template: 'public/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: 'main-[hash:8].css'
      })
    ],

    devServer: {
      open: true
    },

    resolve: {
      extensions: ['', '.js', '.jsx'],
    }
  };
};
