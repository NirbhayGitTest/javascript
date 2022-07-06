let importClass = require('./inheritance')

class C{
    constructor(i){
        this.i=i
    }
}

let c = new C(555)
console.log(c.i);


console.log(importClass.x);