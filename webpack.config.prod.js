var path = require('path');
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  entry: {
      styler: [path.resolve(__dirname, 'src/peapod/mixins/styler.jsx')],
      components: path.resolve(__dirname, 'src/peapod/components.jsx'),
      vars:  [path.resolve(__dirname, 'src/peapod/mixins/vars.jsx')]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  resolve: {
   extensions: ['', '.js', '.jsx', 'index.js', 'index.jsx', '.json', 'index.json']
 },

 module: {
   preLoaders: [
       { test: /\.json$/, loader: 'json'},
   ],
   loaders: [
       { test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
       { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel'}
   ]
 },
};

module.exports = config;
