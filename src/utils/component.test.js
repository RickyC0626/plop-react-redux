const {
  isDashCase,
  getUsedCase,
  getComponentTemplate,
} = require('./component');

describe('[UTILS]', () => {
  describe('isDashCase', () => {
    it('should return values if input contains "-"', () => {
      expect(isDashCase('plop-Component')).toBeTruthy();
    });
    it('should return null if input does not contain "-"', () => {
      expect(isDashCase('PlopComponent')).toBeNull();
    });
  });
  describe('getUsedCase', () => {
    it('should return dashCase value if component name contains "-"', () => {
      expect(getUsedCase('plop-Component')).toEqual('dashCase');
    });
    it('should return properCase value if input does not contain "-"', () => {
      expect(getUsedCase('PlopComponent')).toEqual('properCase');
    });
  });
  describe('getComponentTemplate', () => {
    it('should return PureComponent template path if component type equals "PureComponent Class"', () => {
      expect(getComponentTemplate('PureComponent Class')).toEqual(
        './src/templates/pure.component.js.hbs',
      );
    });
    it('should return Component template path if component type equals "Component Class"', () => {
      expect(getComponentTemplate('Component Class')).toEqual(
        './src/templates/component.js.hbs',
      );
    });
    it('should return Stateless template path if component type equals "Stateless Function"', () => {
      expect(getComponentTemplate('Stateless Function')).toEqual(
        './src/templates/stateless.js.hbs',
      );
    });
    it('should return PureComponent template path otherwise if component type is not known value', () => {
      expect(getComponentTemplate('Test')).toEqual(
        './src/templates/pure.component.js.hbs',
      );
    });
  });
});
