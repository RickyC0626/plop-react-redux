const {
  getNamePrompt,
  getTypePrompt,
  getUseReactIntlPrompt,
} = require('./prompts.js');
const plopConfiguration = require('./configuration.js');

describe('[PROMPTS]', () => {
  describe('getNamePrompt', () => {
    it('should return Name prompt object with default property set to "Button"', () => {
      expect(getNamePrompt(plopConfiguration, 'component').default).toEqual(
        plopConfiguration.defaultComponentName,
      );
    });
    it('should return Name prompt object with default property set to "Button"', () => {
      expect(getNamePrompt(plopConfiguration, 'container').default).toEqual(
        plopConfiguration.defaultContainerName,
      );
    });
  });
  describe('getTypePrompt', () => {
    it('should return Type prompt object with default property set to "defaultComponentType" and with an array of choices', () => {
      expect(
        getTypePrompt(plopConfiguration, ['test1', 'test2']),
      ).toMatchSnapshot();
      expect(
        getTypePrompt(plopConfiguration, ['test1', 'test2']).choices(),
      ).toEqual(['test1', 'test2']);
    });
  });
  describe('getUseReactIntlPrompt', () => {
    it('should return UsereactIntl prompt object with default property is equal to "plopConfig.useReactIntlByDefault"', () => {
      expect(getUseReactIntlPrompt(plopConfiguration)).toMatchSnapshot();
    });
  });
});
