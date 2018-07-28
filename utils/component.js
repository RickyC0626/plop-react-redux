const fs = require('fs');

const dashRegExp = /(-\w)/g;

const getComponents = directoryPath => {
  return fs.readdirSync(directoryPath);
};

const componentExists = (component, directoryPath) => {
  const components = getComponents(directoryPath);
  return componentsContain(components, component);
};

const componentsContain = (components, component) => {
  return components.indexOf(component) >= 0;
};

const isDashCase = componentName => {
  return componentName.match(dashRegExp);
};

module.exports = {
  componentExists,
  isDashCase,
};
