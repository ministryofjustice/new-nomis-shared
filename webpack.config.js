const path = require('path')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    path: path.resolve('lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  externals: [
    'govuk-elements-sass',
    'govuk_frontend_toolkit',
    'moment',
    'prop-types',
    'react',
    'react-router-prop-types',
    'css-loader',
    'style-loader',
    'sass-loader',
    'file-loader',
    'styled-components',
    '@govuk-react/constants',
    '@govuk-react/heading',
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              includePaths: ['node_modules/react-datetime/css'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                'node_modules/govuk_frontend_toolkit/stylesheets',
                'node_modules/govuk-elements-sass/public/sass',
              ],
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
      },
    ],
  },
}
