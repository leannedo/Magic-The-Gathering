const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
  entry: {
    main: `${paths.src}/index.tsx`,
  },
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader'
        // use: {
        //   loader: 'ts-loader',
        //   options: {
        //     useCache: true,
        //     useBabel: true,
        //     babelCore: '@babel/core',
        //     configFileName: `${paths.src}/tsconfig.json`
        //   },
        // },
      },
      // js
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      // CSS and Sass
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My Skincare Haul',
      template: `${paths.public}/index.html`,
      filename: 'index.html',
    }),
  ],
};
