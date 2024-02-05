const Shape = require('./shape');

describe('Shape', () => {
  test('render method should throw error', () => {
    const shape = new Shape();
    expect(() => shape.render()).toThrow('Render method must be implemented by child classes');
  });
});
