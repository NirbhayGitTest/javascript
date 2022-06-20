var bike ={
    vname: "splendor",
    comName: "herohonda",

    owner: function(){
        console.log("hello this bike is : " + " " + this.vname + " " + "by "+ this.comName);
        this.truckOwner.call(bike)
        this.truckOwner()
    }

}

var truck ={
    vname: "tata407",
    comName: "TATA",

    truckOwner: function(){
        console.log("hello this truck is : " + " " + this.vname + " " + "by "+ this.comName);
    }

}

// bike.owner.call(truck , "Nirbhay's" , "bike")

function newbuy(buy1,buy2){
    console.log(buy1 + " " + this.vname + " " + this.comName + " " + buy2);
}

// bike.owner()
// truck.truckOwner()

bike.owner.call(truck)                              //function borrowing

// newbuy.call(bike,"pulsar" , "apacheRTR")
// newbuy.call(truck, "tataACE" , "mahindra")