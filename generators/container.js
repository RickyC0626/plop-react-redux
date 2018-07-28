'use strict';

const { componentExists, isDashCase } = require('../utils/component.js');
const defaultConfig = require('../utils/configuration.js');

module.exports = (plop, config) => {
  const componentConfig = Object.assign(defaultConfig, config || {});

  plop.setGenerator('Add a container component', {
    prompts: [
      {
        type: 'list',
        name: 'type',
        message: 'Select the type of component',
        default: 'PureComponent',
        choices: () => ['PureComponent', 'Component'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'What should it be called?',
        default: 'Form',
        validate: value => {
          if (/.+/.test(value)) {
            return componentExists(value, componentConfig.containersPath)
              ? 'A component with this name already exists'
              : true;
          }

          return 'The name is required';
        },
      },
      {
        type: 'confirm',
        name: 'wantMessages',
        default: true,
        message: 'Do you want to use ReactIntl?',
      },
    ],
    actions: data => {
      let componentTemplate;
      const usedCase = isDashCase(data.name) ? 'dashCase' : 'properCase';
      switch (data.type) {
        case 'PureComponent': {
          componentTemplate = './templates/pure.component.js.hbs';
          break;
        }
        case 'Component': {
          componentTemplate = './templates/component.js.hbs';
          break;
        }
        case 'Stateless Function': {
          componentTemplate = './templates/stateless.js.hbs';
          break;
        }
        default: {
          componentTemplate = './templates/pure.component.js.hbs';
        }
      }

      const actions = [
        {
          type: 'add',
          path: `${
            componentConfig.componentsPath
          }/{{${usedCase} name}}/{{${usedCase} name}}.component.js`,
          templateFile: componentTemplate,
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `${
            componentConfig.componentsPath
          }/{{${usedCase} name}}/{{${usedCase} name}}.container.js`,
          templateFile: './templates/container.js.hbs',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `${
            componentConfig.componentsPath
          }/{{${usedCase} name}}/index.js`,
          templateFile: './templates/index.js.hbs',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `${
            componentConfig.componentsPath
          }/{{${usedCase} name}}/{{${usedCase} name}}.test.js`,
          templateFile: './templates/test.js.hbs',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `${
            componentConfig.componentsPath
          }/{{${usedCase} name}}/{{${usedCase} name}}.style.js`,
          templateFile: `./templates/style.js.hbs`,
          abortOnFail: true,
        },
      ];
      return actions;
    },
  });
};
