class A {
    constructor (x,y,z){
        this.x = x
        this.y = y
        this.z = z
    }
}

var a= new A(1,2,3)

// console.log(a.x);
// console.log(a.y);
// console.log(a.z);

class B extends A{
    constructor (x,y,z,p,q){
        super(x,y,z)
        this.p = p
        this.q = q
    }
}

var b= new B(5,10,20,30,40)

console.log(b.x);
console.log(b.y);
console.log(b.z);
console.log(b.p)
console.log(b.q);

module.export = new B()