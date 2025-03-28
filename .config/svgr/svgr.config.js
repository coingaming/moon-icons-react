const template = require('./templates/svgr.template.js');
const dimensions = require('./transform/dimensions.js');

module.exports = {
  svgProps: { xmlns: 'http://www.w3.org/2000/svg', 'data-moon-icons-react-id': 'icon' },
  replaceAttrValues: { 'black': 'currentColor' },
  template,
  index: false,
  plugins: ['@svgr/plugin-jsx'],
  jsx: {
    babelConfig: {
      plugins: [dimensions],
    },
  },
};
