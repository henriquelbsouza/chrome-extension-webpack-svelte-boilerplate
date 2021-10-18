const { merge } = require( 'webpack-merge' );
const common = require( './webpack.common.js' );
const CompressionPlugin = require( 'compression-webpack-plugin' );
const CssMinimizerPlugin = require( 'css-minimizer-webpack-plugin' );
const TerserPlugin = require( 'terser-webpack-plugin' );

module.exports = merge( common, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin( {
        terserOptions: {
          output: {
            comments: false
          }
        }
      } )
    ]
  },
  plugins: [
    new CompressionPlugin( {
      test: /\.(js|css)$/,
      filename: '[file].br',
      compressionOptions: { level: 11 },
      threshold: 8192,
      algorithm: 'brotliCompress',
      deleteOriginalAssets: true,
      minRatio: 0.8
    } )
  ]
} );