const { resolve } = require( 'path' );
const { merge } = require( 'webpack-merge' );
const common = require( './webpack.common.js' );

module.exports = merge( common, {
  mode: 'development',
  output: {
    path: resolve( __dirname, 'dist' ),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].js.map',
    clean: true
  },
  watchOptions: {
    poll: 1000
  },
  devtool: false
} );
