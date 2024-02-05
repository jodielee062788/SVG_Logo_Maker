const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');
const { generateSVG } = require('./lib/generateSVG');

async function run() {
  const shapeChoices = ['Circle', 'Triangle', 'Square'];
  const { text, textColor, shape, shapeColor } = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo text:',
      validate: (input) => input.length <= 3,
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
      choices: shapeChoices,
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (Keyword or Hexadecimal):',
    },
  ]);

  let selectedShape;
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
  generateSVG(selectedShape, text, textColor, shapeColor); // Corrected argument order
}

run();
