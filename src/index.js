let D0 = require('E:/Hamed/Projects/Javascript/d1/lib/index');

class D1{
    constructor (point1, point2) {
        this.equation = `${this.m} * ${x} + ${b}`
        this.lineProperties = []
    }

    static getLineByEquation (m, b) {
        const p1 = null;
        const p2 = null;
        return new D1(p1, p2)
    }

    getY (x) {
        return eval(this.equation)
    }

    delta (point1, point2) {
        if (point1 && point2 instanceof D0){
            this.deltaList = []
            const maxLength = math.max(point1.count(), point1.count())
            for (let i = 0; i <= maxLength; i++) deltaList.push(point1.d(i) - point2.d(i))
            return this.deltaList
        }
    }

    get deltaY () {
        return point1.d(1) - point2.d(1)
    }

    slope () {
        this.m = this.deltaList[0] / this.deltaList[1]
        return this.m
    }

    /*yIntercept (point1, point2) {
        this.b = 
    }*/

}

module.exports = D1