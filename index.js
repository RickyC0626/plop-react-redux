const componentGenerator = require('./generators/component.js');
const containerGenerator = require('./generators/container.js');

module.exports = (plop, config) => {
  componentGenerator(plop, config);
  containerGenerator(plop, config);
  // plop.setGenerator('component', componentGenerator);
  // plop.setGenerator('container', containerGenerator);
};
