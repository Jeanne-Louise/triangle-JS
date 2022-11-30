// class Cube {
//     constructor(length) {
//         this.length = length;
//     }
    
//     getSideLength () {
//         return this.length;
//     }
    
//     getSurfaceArea () {
//         return (this.length * this.length) * 6;
//     }
    
//     getVolume () {
//         return Math.pow(this.length,3);
//     }
// }

// module.exports = {
//     Cube:Cube
// }


class Triangle {
    constructor (length) {
       this.length = length;
    }

    
    getSideLength () {
        return this.length;
    }

    getSurfaceArea () {
        return (this.length * this.length) * 2;
    }

    getSideA (sideA) {
       return sideA;
       
    }

    getSideB (sideB) {
        return sideB;
    }
    getSideC (sideC) {
        return sideC;
    }

}

module.exports = {
    Triangle:Triangle
}