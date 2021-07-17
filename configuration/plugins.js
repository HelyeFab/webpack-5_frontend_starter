const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const WebpackBar = require('webpackbar')
const ESLintPlugin = require('eslint-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const environment = require('./environment.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlCriticalPlugin = require('html-critical-webpack-plugin')


// Three different arrays of plugins in case some configs might have specific plugins
// Ex: critical css it's only used for production 🚀
const myPlugins = []
const prodPlugins = []
const devPlugins = []

 //This dynamically creates an array of all the html pages inside the src folder and for each one of them dynamically creates a new HTMLWebpackPlugin
 const sitePages = fs
   .readdirSync(environment.paths.pages)
   .filter((file) => path.extname(file).toLowerCase() === '.ejs').map(name =>  name.split('.').slice(0, -1).join('.')) //output ['about','index',etc.]
  
// For each ejs page inside the src folder we dynamically create a new HTMLWebpackPlugin
   const html_webpack_plugins = sitePages.map((name) => {
    return new HTMLWebpackPlugin({
      template: `${environment.paths.pages}/${name}.ejs`,
      filename: `${name}.html`,
      favicon: `${environment.paths.source}/images/favicon.ico`,
    });
  });  

// A list of plugins used by this boilerplate
// Webpack progression bar

const webpackBar = new WebpackBar()
// ESLint configuration
//
const es_lint_config = new ESLintPlugin({
  files: ['.', 'src', 'config'],
  formatter: 'table',
})

// CSS extractor
const mini_css_extract_plugin = new MiniCssExtractPlugin({
  filename: 'css/[name].css',
  chunkFilename: '[name].css',
})
// For each html page inside the dist folder we dynamically create a new indexCriticalCss
//  Critical CSS

const criticalCss = sitePages.map((name) => {
  return new HtmlCriticalPlugin({
    base: environment.paths.output,
    src: `${name}.html`,
    dest: `${name}.html`,
    inline: true,
    minify: true,
    extract: true,
    dimensions: [
      {
        height: 565,
        width: 375,
      },
      {
        height: 900,
        width: 1200,
      },
    ],
    penthouse: {
      blockJSRequests: false,
    },
  });
}); 

// Clean webpack
const clean_webpack_plugin = new CleanWebpackPlugin({
  verbose: true,
  cleanOnceBeforeBuildPatterns: ['**/*', '!stats.json'],
})


const ejs = new webpack.ProvidePlugin({
  _: 'underscore',
})

myPlugins.push(
  webpackBar,
  es_lint_config,
  ...html_webpack_plugins,
  mini_css_extract_plugin,
  clean_webpack_plugin,
  ejs,
)

prodPlugins.push(
  ...criticalCss
)

module.exports = { myPlugins, prodPlugins, devPlugins }
