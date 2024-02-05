const { Circle, Square, Triangle } = require("./shapes"); // Import shape classes

// Test suite for Triangle shape
describe('Triangle', () => {
  // Test case: Triangle renders correctly
  test('It renders correctly', () => {
    const shape = new Triangle(); // Create a new Triangle instance
    const color = 'pink'; // Define color for testing
    shape.setColor(color); // Set color for the shape
    // Verify that the rendered SVG matches the expected output
    expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`);
  });
});

// Test suite for Circle shape
describe('Circle', () => {
  // Test case: Circle renders correctly
  test('It renders correctly', () => {
    const shape = new Circle(); // Create a new Circle instance
    const color = 'blue';
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`);
  });
});

// Test suite for Square shape
describe('Square', () => {
  // Test case: Square renders correctly
  test('It renders correctly', () => {
    const shape = new Square(); // Create a new Square instance
    const color = 'green';
    shape.setColor(color);
    expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"/>`);
  });
});
