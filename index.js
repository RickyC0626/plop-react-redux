const componentGenerator = require('./src/generators/component.js');
const containerGenerator = require('./src/generators/container.js');
const defaultConfig = require('./src/utils/configuration.js');

module.exports = (plop, config) => {
  const currentConfig = Object.assign(defaultConfig, config || {});
  componentGenerator(plop, currentConfig);
  containerGenerator(plop, currentConfig);
};
