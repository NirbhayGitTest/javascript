var myself = {
    f_name: "Nirbhay",
    l_name: "Upadhyay",
    yoe: 3.8,
    skillset: ["java" , "selenium" , "javascript" , "api"],

    greet: function(){
        return "My name is : " +" "+this.f_name+" "+this.l_name
    }
}

var biodata = Object.create(myself)
biodata.__proto__=myself                                            //inheritance 
biodata.f_name="Javascript"                                         //overriding
biodata.l_name="python"                                             //overriding
console.log(biodata.skillset);
console.log(biodata);