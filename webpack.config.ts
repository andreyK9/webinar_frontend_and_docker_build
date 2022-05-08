import path, { join } from 'path';
import {
  Configuration,
  RuleSetRule,
  WebpackPluginInstance,
  RuleSetUseItem,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const isDev = process.env.NODE_ENV === 'development';

const htmlWebpackPlugin: WebpackPluginInstance = new HtmlWebpackPlugin({
  template: join(__dirname, 'src', 'index.template.html'),
});
const miniCssExtractPlugin: WebpackPluginInstance = new MiniCssExtractPlugin({
  filename: '[name].[hash].css',
  chunkFilename: '[id].[hash].css',
});

const allPlugins: WebpackPluginInstance[] = isDev
  ? /* dev  */ [htmlWebpackPlugin]
  : /* prod */ [htmlWebpackPlugin, miniCssExtractPlugin];

const loaderMiniCssExtractPlugin: RuleSetUseItem = MiniCssExtractPlugin.loader;
const ruleCss: RuleSetRule = {
  test: /\.scss$/,
  include: join(__dirname, 'src'),
  exclude: /node_modules/,
  use: [
    isDev ? 'style-loader' : loaderMiniCssExtractPlugin,
    'css-loader',
    // {
    //   loader: 'css-loader',
    //   options: {
    //     importLoaders: 1,
    //     modules: {
    //       exportLocalsConvention: 'camelCase',
    //       localIdentName: isDev ? '[local]___[hash:base64:3]' : '[hash:base64:6]',
    //     },
    //   },
    // },
    'sass-loader',
  ],
};

const tsRuleBase: RuleSetRule = {
  test: /\.tsx?$/i,
  loader: 'ts-loader',
};

const tsRule: RuleSetRule = {
  ...tsRuleBase,
  options: {
    configFile: join(__dirname, 'tsconfig.json'),
  },
};

const svgRule: RuleSetRule = { test: /\.svg$/, loader: 'react-svg-loader' };

const webAppConfig: Configuration & { devServer?: Record<string, unknown> } = {
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'eval-source-map' : undefined,
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },
  entry: join(__dirname, 'src', 'index.tsx'),
  output: {
    path: join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  target: 'web',
  plugins: allPlugins,
  module: {
    rules: [tsRule, ruleCss, svgRule],
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
};

export default [/** app **/ webAppConfig];
