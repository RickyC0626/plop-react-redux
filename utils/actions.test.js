const { getAddAction } = require('./actions.js');
describe('[ACTIONS]', () => {
  describe('getAddAction', () => {
    const defaultAddParameters = {
      componentPath: './source/components',
      usedCase: 'properCase',
      fileName: 'index',
      templateFile: './templates/index.js.hbs',
      additionalConfig: null,
    };
    const defaultExpectedAction = {
      type: 'add',
      path: `./source/components/{{properCase name}}/index.js`,
      templateFile: './templates/index.js.hbs',
      abortOnFail: true,
    };

    it('should return add action object without data property"-"', () => {
      expect(
        getAddAction(
          defaultAddParameters.componentPath,
          defaultAddParameters.usedCase,
          defaultAddParameters.fileName,
          defaultAddParameters.templateFile,
          defaultAddParameters.additionalConfig,
        ),
      ).toEqual(defaultExpectedAction);
    });
    it('should return add action object with data property"-"', () => {
      const addParameter = {
        ...defaultAddParameters,
        additionalConfig: { componentType: 'component' },
      };

      const expectedActionWithDataProperty = {
        ...defaultExpectedAction,
        data: { componentType: 'component' },
      };
      expect(
        getAddAction(
          addParameter.componentPath,
          addParameter.usedCase,
          addParameter.fileName,
          addParameter.templateFile,
          addParameter.additionalConfig,
        ),
      ).toEqual(expectedActionWithDataProperty);
    });
  });
});
