const D1 = require('../lib/index')
const D0 = require('../../d0/src/index')

//const myLine = D1.getLineByEquation(2, 0)
p1 = new D0(1, 2, 3)
p2 = new D0(4, 5, 6)
const myLine2 = new D1(p1, p2)

console.log(myLine2.deltaYs)