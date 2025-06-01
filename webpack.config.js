const { merge } = require('webpack-merge');
const commonConfig = require('./webpack/webpack.common.js');
const developmentConfig = require('./webpack/webpack.dev.js');
const productionConfig = require('./webpack/webpack.prod.js');

// const isDevelopmentMode = process.env.MODE === 'dev';

module.exports = (env) => {
  console.log('env', env);
  
  const isProductionMode = env.production;

  if (isProductionMode) {
    return merge(commonConfig, productionConfig);
  }
  
  return merge(commonConfig, developmentConfig);
};
