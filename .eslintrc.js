module.exports = {
  extends: 'airbnb',
  rules: {
    // windows linebreaks when not in production environment
    'linebreak-style': ['error', process.env.NODE_ENV === 'prod' ? 'unix' : 'windows'],
  },
  parser: 'babel-eslint',
};
