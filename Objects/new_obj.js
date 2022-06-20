var bus = new Object()

bus.brand="volvo",
bus.d_name="nirbhay",
bus.d_lastName="busWala",
bus.yoe="20",

bus.skills=["highway","mountain","hills","offroad"],

bus.greet=function(){

    return "Hello all"+"my name is"+"  "+this.d_name+"  "+this.d_lastName
},

bus.company={
    c_name: "TestYantra",
}

console.log(bus);
console.log(bus.skills[2]);
