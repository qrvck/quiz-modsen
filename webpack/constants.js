const styleRegex = /\.(sa|sc|c)ss$/;
const styleModuleRegex = /\.module\.(scss|sass|css)$/;

const moduleFileExtensions = [
  '.web.mjs',
  '.mjs',
  '.web.js',
  '.js',
  '.web.ts',
  '.ts',
  '.web.tsx',
  '.tsx',
  '.json',
  '.web.jsx',
  '.jsx',
];

module.exports = {
  styleRegex,
  styleModuleRegex,
  moduleFileExtensions,
};
