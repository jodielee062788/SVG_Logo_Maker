// Import the 'fs' module for file system operations
const fs = require('fs'); 

// Base Shape class for defining common properties and methods of shapes
class Shape {
    constructor() {
        this.color = ''; // Initialize color property
    }

    // Method to set the color of the shape
    setColor(color) {
        this.color = color;
    }

    // Abstract method for rendering shapes (to be implemented by child classes)
    render() {
        throw new Error('Render method must be implemented by child classes');
    }
}

// Triangle class inheriting from Shape, representing a triangle shape
class Triangle extends Shape {
    // Method to render a triangle shape with the specified color
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}"/>`;
    }
}

// Circle class inheriting from Shape, representing a circle shape
class Circle extends Shape {
    // Method to render a circle shape with the specified color
    render() {
        return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`;
    }
}

// Square class inheriting from Shape, representing a square shape
class Square extends Shape {
    // Method to render a square shape with the specified color
    render() {
        return `<rect x="50" height="200" width="200" fill="${this.color}"/>`;
    }
}

module.exports = { Triangle, Circle, Square };
