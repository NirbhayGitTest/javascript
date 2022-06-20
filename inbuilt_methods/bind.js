var avenger1 ={

    fname: "iron",
    lname: "man",

    av1info: function(){
        console.log(this.fname , this.lname);
    }
}


var avenger2 ={

    fname: "doctor",
    lname: "strange",

    av2info: function(){
        console.log(this.fname , this.lname);
    }
}

function assemble(msg){
    console.log(msg+" " + this.fname +" " + this.lname);
}

var avname = avenger2.av2info.bind(avenger1)
avname()

var order = assemble.bind(avenger2 , "assemble" )
order()