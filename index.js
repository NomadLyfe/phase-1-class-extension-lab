class Polygon {
    constructor(array) {
        this.array = array;
    }
    get countSides() {
        return this.array.length;
    }
    get perimeter() {
        return this.array.reduce((acum, val) => acum + val, 0);
    }
}
class Triangle extends Polygon {
    get isValid() {
        const add1 = this.array[0] + this.array[1];
        const add2 = this.array[0] + this.array[2];
        const add3 = this.array[1] + this.array[2];
        if (add1 <= this.array[2]) {
            return false;
        } else if (add2 <= this.array[1]) {
            return false;
        } else if (add3 <= this.array[0]) {
            return false;
        } else {
            return true;
        }
    }
}
class Square extends Polygon {
    get isValid() {
        if (this.array[0] === this.array[1] && this.array[1] === this.array[2] && this.array[2] === this.array[3]) {
            return true;
        } else {
            return false;
        }
    }
    get area() {
        return this.array[0] ** 2
    }
}
