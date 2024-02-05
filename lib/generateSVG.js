// Import the 'fs' module for file system operations
const fs = require('fs'); 

// SVG class for generating SVG content
class Svg {
    constructor() {
        this.textElement = ''; 
        this.shapeElement = ''; 
    }
    
    // Method to render SVG content
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
    
    // Method to set text element properties
    setTextElement(text, textColor) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
    
    // Method to set shape element properties
    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}

// Function to generate SVG file with given parameters
function generateSVG(shape, text, textColor, shapeColor) {
    const svg = new Svg(); 
    svg.setShapeElement(shape); 
    svg.setTextElement(text, textColor); 

    const svgContent = svg.render(); // Render SVG content

    fs.writeFileSync('logo.svg', svgContent); // Write SVG content to file
    console.log('Generated logo.svg'); // Log success message
}

module.exports = { generateSVG };
