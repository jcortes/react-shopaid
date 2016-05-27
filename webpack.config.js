module.exports = {
  entry: [
    "./app/App.js",
    "./app/styles/app.less"
  ],
  output: {
    filename: "./public/bundle.js"
  },
  devServer: {
    inline: true,
    port: 3333
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel",
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      }, // use ! to chain loaders
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}
