const { resolve } = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const webpack = require( 'webpack' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const { version } = require( './package.json' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const ESLintPlugin = require('eslint-webpack-plugin');

console.log( { version } );

module.exports = {
  context: resolve( __dirname, 'src' ),
  entry: {
    main: './main.js',
    background: './background.js'
  },
  output: {
    path: resolve( __dirname, 'dist' ),
    filename: '[name].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.svg|.jpg$/,
        type: 'asset'
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.svelte$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true
          }
        }
      },
      {
        // required to prevent errors from Svelte on Webpack 5+, omit on Webpack 4
        test: /node_modules\/svelte\/.*\.mjs$/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false // necessary if you use url('/path/to/some/asset.png|jpg|gif')
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin( {
      filename: '[contenthash].css'
    } ),
    new HtmlWebpackPlugin( {
      inject: true,
      hash: true,
      cache: false,
      meta: { version },
      template: resolve( __dirname, 'src', 'index.html' )
    } ),
    new CopyWebpackPlugin( {
      patterns: [
        { from: resolve( __dirname, 'src', 'manifest.json' ), to: resolve( __dirname, 'dist' ) }
      ]
    } ),
    new ESLintPlugin( 
      {
        fix: true
      },
    )
  ]
};
