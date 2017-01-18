const path = require('path');
const webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      include: path.resolve('src')
    },
    {test: /\.css$/, loader: ['style', 'css']},
    {test: /\.s[ac]ss$/, loaders: ['style', 'css', 'sass', 'postcss-loader']},
    {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
    {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
    {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
    {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
    {test: /\.(jpe?g|png|giff|svg)$/i, loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]',
      'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false']},
      {test: /\.json$/, loader: 'json-loader'},
      {test: /\.(png|gif|jpg|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000?'},
      {test: /\.(woff2?|ttf|eot|svg)(\?[\s\S]+)?$/, loader: 'file?emitFile=false'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.OldWatchingPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
  ],
  devServer: {
    contentBase: './src',
    hot: true
  },
  eslint: {
    configFile: './.eslintrc'
  },
  postcss: function () {
    return [autoprefixer];
  },
  eslint: {
    configFile: './.eslintrc'
  }
}
