/* eslint-disable no-underscore-dangle */

import { fileURLToPath } from 'url';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import postcssPresetEnv from 'postcss-preset-env';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://webpack.js.org/configuration/#options
export const context = __dirname;
export const entry = {
  //   main: './src/index.tsx',
  main: './src/app.ts',
  app: './src/index.tsx',
};
export const output = {
  path: path.resolve(__dirname, 'wwwroot/dist'),
  publicPath: '/dist/',
  filename: '[name].bundle.js',
  assetModuleFilename: 'images/[hash]/[ext][query]',
  clean: true,
};
export const resolve = {
  extensions: ['.tsx', '.ts', '.jsx', '.js'],
  // https://blog.johnnyreilly.com/2018/08/21/typescript-webpack-alias-goodbye-relative-paths
  plugins: [new TsconfigPathsPlugin()],
};
export const plugins = [
  new MiniCssExtractPlugin(),
  // https://www.npmjs.com/package/html-webpack-plugin
  new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: '../index.html',
  }),
  // https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/blob/main/examples/babel-loader/webpack.config.js
  new ForkTsCheckerWebpackPlugin({
    typescript: {
      diagnosticOptions: {
        semantic: true,
        syntactic: true,
      },
      mode: 'write-references',
    },
    eslint: {
      files: './src/**/*.{tsx,ts,jsx,js}',
    },
  }),
];
export const module = {
  rules: [
    // IMAGES: https://webpack.js.org/guides/asset-modules
    {
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: 'asset',
    },
    // FONTS: Inject in bundle rather than emitting separate files
    {
      test: /\.(woff2?|eot|ttf|otf)$/,
      type: 'asset/inline',
    },
    // SCSS/SASS/CSS
    {
      test: /\.(s[ac]|c)ss$/i,
      use: [
        // https://www.npmjs.com/package/mini-css-extract-plugin
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: '',
          },
        },
        // https://webpack.js.org/loaders/css-loader
        { loader: 'css-loader', options: { importLoaders: 1 } },
        // https://webpack.js.org/loaders/postcss-loader
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [postcssPresetEnv()],
            },
          },
        },
        // https://webpack.js.org/loaders/sass-loader
        'sass-loader',
      ],
    },
  ],
};
