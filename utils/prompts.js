const { validateNameInput } = require('./inputValidation.js');

const getNamePrompt = (plopConfig, type) => {
  let defaultName = plopConfig.defaultComponentName;
  let defaultFolderPath = plopConfig.componentsPath;
  if (type === 'container') {
    defaultName = plopConfig.defaultContainerName;
    defaultFolderPath = plopConfig.containersPath;
  }
  return {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: defaultName,
    validate: validateNameInput(defaultFolderPath, type),
  };
};

const getTypePrompt = (plopConfig, availableTypes) => {
  return {
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: plopConfig.defaultComponentType,
    choices: () => availableTypes,
  };
};

const getUseReactIntlPrompt = plopConfig => {
  return {
    type: 'confirm',
    name: 'useReactIntl',
    default: plopConfig.useReactIntlByDefault,
    message: 'Do you want to use ReactIntl?',
  };
};

module.exports = {
  getNamePrompt,
  getTypePrompt,
  getUseReactIntlPrompt,
};
