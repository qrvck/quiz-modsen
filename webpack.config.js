const { merge } = require('webpack-merge');
const commonConfig = require('./webpack/webpack.common.js');
const developmentConfig = require('./webpack/webpack.dev.js');
const productionConfig = require('./webpack/webpack.prod.js');

module.exports = (env) => {  
  const isProductionMode = env.production;

  if (isProductionMode) {
    return merge(commonConfig(env), productionConfig);
  }
  
  return merge(commonConfig(env), developmentConfig);
};
