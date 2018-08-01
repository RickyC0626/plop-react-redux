const componentGenerator = require('./generators/component.js');
const containerGenerator = require('./generators/container.js');
const defaultConfig = require('./utils/configuration.js');

module.exports = (plop, config) => {
  const currentConfig = Object.assign(defaultConfig, config || {});
  componentGenerator(plop, currentConfig);
  containerGenerator(plop, currentConfig);
};
