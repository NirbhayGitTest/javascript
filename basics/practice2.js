//1. call :-

// var avenger1 ={

// 	fname: "spider",
// 	lname: "man",

// 	info1: function(){
// 		console.log("my name is"+" "+this.fname+" "+this.lname)
// 	}
// }

// var avenger2 ={

// 	fname: "doctor",
// 	lname: "strange",

// 	info2: function(){
// 		console.log("my name is"+" "+this.fname+" "+this.lname)
// 	}
// }

// function msg(command){
// 	console.log(command+" "+this.fname+" "+this.lname)
// }

// avenger1.info1.call(avenger2)
// msg.call(avenger1,"assemble")

/*********************************************************************** */

//2. bind :-

// var avenger1 ={

// 	fname: "spider",
// 	lname: "man",

// 	info1: function(){
// 		console.log("my name is"+" "+this.fname+" "+this.lname)
// 	}
// }

// var avenger2 ={

// 	fname: "doctor",
// 	lname: "strange",

// 	info2: function(){
// 		console.log("my name is"+" "+this.fname+" "+this.lname)
// 	}
// }

// function msg(command){
// 	console.log(command+" "+this.fname+" "+this.lname)
// }

// var order = avenger1.info1.bind(avenger2)
// order()

// var order1 = msg.bind(avenger1,"assemble")
// order1()

/************************************************************************** */

//3. apply

// var avenger1 ={

// 	fname: "spider",
// 	lname: "man",

// 	info1: function(){
// 		console.log("my name is"+" "+this.fname+" "+this.lname)
// 	}
// }

// var avenger2 ={

// 	fname: "doctor",
// 	lname: "strange",

// 	info2: function(){
// 		console.log("my name is"+" "+this.fname+" "+this.lname)
// 	}
// }

// function msg(command1 , command2){
// 	console.log(command1+" "+this.fname+" "+this.lname+" "+command2)
// }

// avenger1.info1.apply(avenger2)
// msg.apply(avenger1,["assemble" , "now"])