class biodata{

	constructor(name,lname,age){

	this.name=name
	this.lname=lname
	this.age=age
    }
	a=10
	static b=20

	address(){
	console.log(this.a)
	console.log(biodata.b)
	}

	static occupation(){
	console.log(this.b)
	console.log(this.a)
	
	console.log(b1.a)
	}

	//invoking static method inside non-static method
	display(){
    biodata.occupation()
	}

	//invoking non-static method inside non-static method
	display(){
	this.address()
	}
	
    
	}

    let b1 = new biodata("nirbhay","kumar","28")

    b1.display()


    console.log("=============================================================");

let arr = [1,2,3,4,5]

var x=arr[2]
var y=arr[3]
console.log(x,y)

var[x,y] = arr
console.log(x,y)

var [x,,,y] = arr
console.log(x,y)

console.log("=============================================================");
//case 1
var bike = {
	name: "honda",
	year: "2000",

	specs: ["black","automatic"],

}

let bname = bike.name
console.log(bname)

let byear = bike.year
console.log(byear)

let bspecs = bike.specs
console.log(bspecs)

console.log("=============================================================");
//case2
//condition 1: curly braces
//condition 2: reference name should be same as that which is in the object
let {name} = bike
let {year} = bike
console.log(name);
console.log(year);

console.log("=============================================================");

//case 3  change the referance variable => so that we can declare our own referance variable
//name in object bike will be renamed as bikename
let {name:bikename} = bike
console.log(bikename);