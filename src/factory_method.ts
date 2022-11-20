interface Shape {
    draw(): void
}

class Rectangle implements Shape {
    draw(): void {
        console.log("Drawing a rectangle!")
    }
}

class Square implements Shape {
    draw(): void {
        console.log("Drawing a square!")
    }
}

class Circle implements Shape {
    draw(): void {
        console.log("Drawing a circle!")
    }
}

class ShapeFactory {
    createShape(shapeType: string): Shape {
        if (shapeType.toLocaleLowerCase() === "rectangle") {
            return new Rectangle()
        }
        if (shapeType.toLocaleLowerCase() === "square") {
            return new Square()
        }
        if (shapeType.toLocaleLowerCase() === "circle") {
            return new Circle()
        }
        throw new Error("invalid shape type " + shapeType)
    }
}

const factory = new ShapeFactory()

const rectangle = factory.createShape("rectangle")
rectangle.draw()

const square = factory.createShape("square")
square.draw()

const circle = factory.createShape("circle")
circle.draw()

const triangle = factory.createShape("triangle")
triangle.draw()
