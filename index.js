const inquirer = require('inquirer'); // Import the 'inquirer' module for user prompts
const { Triangle, Circle, Square } = require('./lib/shapes'); // Import shape classes
const { generateSVG } = require('./lib/generateSVG'); // Import generateSVG function

// Asynchronous function to run the SVG Logo Maker application
async function run() {
  // Array of shape choices available to the user
  const shapeChoices = ['Circle', 'Triangle', 'Square'];

  // Prompt the user for logo text, text color, shape choice, and shape color
  const { text, textColor, shape, shapeColor } = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: (input) => input.length <= 3, // Validate input length
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (Keyword or Hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: shapeChoices, // Provide shape choices as a list
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (Keyword or Hexadecimal):',
    },
  ]);

  let selectedShape;
  // Instantiate the selected shape class based on user choice
  switch (shape) {
    case 'Circle':
      selectedShape = new Circle();
      break;
    case 'Triangle':
      selectedShape = new Triangle();
      break;
    case 'Square':
      selectedShape = new Square();
      break;
    default:
      throw new Error('Invalid shape selected');
  }

  selectedShape.setColor(shapeColor); 
  generateSVG(selectedShape, text, textColor, shapeColor); 
}

run(); 
