var person1 = {

    fname: "Timon",
    lname: "Smarty",

    timoninfo: function(){
        console.log("hi my name is : " + " " + this.fname + " " + this.lname);
    }
}

var person2 = {

    fname: "Pumba",
    lname: "Runner",

    pumbainfo: function(){
        console.log("hello this is : " + " " + this.fname + " " + this.lname);
    }
}

function location(location1,location2){
    console.log(location1 +" is "+ this.fname +" location" +" and "+ location2 +" is "+ this.lname +" location");
}

person1.timoninfo.call(person2)
location.call(person1,"jungle","city")
location.call(person2,"jungle","city")
location.apply(person1,["jungle","city"])