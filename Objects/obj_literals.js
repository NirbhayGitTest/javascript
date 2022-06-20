var sport = {

    s_name: "Badminton",
    s_player: "Nirbhay",

    yop : 16,

    skills: ["smash","drop"],                   //=> Array
    
    greet:function(){                                                                     //=> function
        return this.s_player + "  " + "likes to play" + "  " + this.s_name
    } ,

achievements: {                                     //=> object
    singles:"best in singles",
    doubles:"good in doubles",

}

}

sport.location="Bangalore"                  //=> adding the elements to the object
console.log(sport);                         
delete sport.yop                            //=> deleting elements from the object
console.log(sport);

console.log("=============================================================");

console.log(sport.greet());                   //=>printing the function inside the object
console.log(sport.skills);                  //=> printing the array inside the object
console.log(sport);                         //=> printing the complete object 
console.log(sport.achievements);            //=> printing the corresponding value for the particular property  (one way to print)
//(or)
console.log(sport["achievements"]);         //=> printing the corresponding value for the particular property (other way)

console.log("=============================================================");

console.log(sport.s_name);
console.log(sport.achievements.singles);
console.log(sport.skills[1]);