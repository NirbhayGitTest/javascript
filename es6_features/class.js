class biodata{
    constructor(fname,lname,email){
        this.fname=fname
        this.lname=lname
        this.email=email
    }
    a=20
    static b=50

    display(){
        console.log(this.a);        //20
        console.log(this.b);        //undefined
        console.log(biodata.b);     //50
        console.log(this.fname);
        console.log("-------non static display method-------");
    }

    static sample(){
        console.log(this.a);        //undefined
        console.log(this.b);        //50
        console.log(biodata.b);     //50
        console.log(this.lname);
        console.log("-------static sample method-------");
    }
    Demo(){
        console.log(this.a);       
        console.log(this.b);        
        console.log(biodata.b);     
        console.log(this.lname);
        console.log("-------non-static Demo method-------");
    }
    /************************************************************************************** */
//invoking static method inside non-static method
display(){
    biodata.sample()
}

/****************************************************************************************** */
//invoking non-static method inside non-static method

// display(){
// this.Demo()
// }
// b1.display()

/************************************************************************************** */
//invoking non-static inside static method



}   
//create an instance 

let b1 = new biodata("nirbhay","kumar","nku@avengers.com")
let b2 = new biodata("nir", "upadhyay" , "nir@dc.com")

// console.log(b1);        //biodata { a: 20, fname: 'nirbhay', lname: 'kumar', email: 'nku@avengers.com' }
// console.log(b1.fname);  //nirbhay
// console.log(b2);        //biodata { a: 20, fname: 'nir', lname: 'upadhyay', email: 'nir@dc.com' }
// console.log(b2.lname);  //upadhyay

// console.log(biodata.a); // undefined     classname.nonstatic >undefined
// console.log(b1.a);      //20             instanceName.nonstatic
// console.log(b2.a);      //20             instanceName.nonstatic
// console.log(biodata.b); //50             classname.static
// console.log(b1.b);      // undefined     instanceName.static >undefined
// console.log(b2.b);      // undefined     instanceName.static >undefined


// b1.display()
b1.display()
// biodata.sample()


