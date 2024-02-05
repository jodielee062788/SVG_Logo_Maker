const fs = require('fs');

class Svg {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
    setTextElement(text, textColor) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render();
    }
}

function generateSVG(shape, text, textColor, shapeColor) {
    const svg = new Svg();
    svg.setShapeElement(shape);
    svg.setTextElement(text, textColor);

    const svgContent = svg.render();

    fs.writeFileSync('logo.svg', svgContent);
    console.log('Generated logo.svg');
}

module.exports = { generateSVG };