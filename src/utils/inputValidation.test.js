var { validateNameInput } = require('./inputValidation');
const plopConfiguration = require('./configuration.js');

describe('[INPUT VALIDATION]', () => {
  describe('validateNameInput', () => {
    it('should return "The name is required" message if componentName is null or empty', () => {
      expect(
        validateNameInput(plopConfiguration.componentsPath, 'component')(''),
      ).toEqual('The name is required');
    });
  });
});
