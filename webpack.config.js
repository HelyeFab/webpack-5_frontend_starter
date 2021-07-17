/**
 * Webpack main configuration file
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const environment = require('./configuration/environment');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer'); // help tailwindcss to work
const { myPlugins } = require('./configuration/plugins.js');

module.exports = {
  entry: {
    app: path.resolve(environment.paths.source, 'js', 'app.js'),
  },
  output: {
    filename: 'js/[name].js',
     path: environment.paths.output,
   
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            esModule: false,
          },
        },
      },

      {
        test: /\.ejs$/,
        loader: 'ejs-compiled-loader',
        options: {
          htmlmin: true,
          htmlminOptions: {
            removeComments: true,
          },
        },
      },

      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(css|scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader', 
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [tailwindcss, autoprefixer],
              },
            },// postcss loader needed for tailwindcss
          },
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: 'defaults' }]],
              plugins: ['@babel/plugin-proposal-class-properties'],
            },
          },
        ],
      },
      {
        test: /\.(svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'svg/[name].[ext]',
              publicPath: '../',
              limit: environment.limits.images,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: {
          loader: 'responsive-loader',
          options: {
            adapter: require('responsive-loader/sharp'),
            name: '[name]-[width].[ext]',
            format: 'jpg',
            outputPath: 'assets/images',
            esModule:false,
          },
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'fonts/[name].[hash:6].[ext]',
              publicPath: '../',
              limit: environment.limits.fonts,
            },
          },
        ],
      },
    ],
  },
  plugins: myPlugins,
  target: 'web',
};
