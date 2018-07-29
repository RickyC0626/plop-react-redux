const { isDashCase } = require('./component');

describe('[UTILS] isDashCase', () => {
  it('should return values if input contains "-"', () => {
    expect(isDashCase('plop-Component')).toBeTruthy();
  });
  it('should return null if input does not contain "-"', () => {
    expect(isDashCase('PlopComponent')).toBeNull();
  });
});
