import { merge } from 'webpack-merge';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import dev from './webpack.dev';

export default merge(dev, {
  devServer: {
    static: './wwwroot',
    open: true, // https://webpack.js.org/configuration/dev-server/#devserveropen
    hot: true, // https://webpack.js.org/configuration/dev-server/#devserverhot
    // watch mode enabled by default in 'webpack-dev-server' (https://webpack.js.org/configuration/watch)
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
