module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: ['react-hot-loader/babel', '@babel/plugin-proposal-class-properties'],
  env: {
    production: {
      presets: ['minify']
    }
  }
};
