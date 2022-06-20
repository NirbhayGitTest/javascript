// var a=20
// function num(){
//     var a=10
//     console.log(a);
//     console.log(this.a);
// }num()
// var wwe = new num()
// console.log(wwe.num);

//***************************** */
// Java program 
// public class ThisKeyword {
	
	
// 	int a=20;

// 	public void num()
// 	{
// 		int a=10;
// 		System.out.println(a);
// 		System.out.println(this.a);
// 	}
	
	
// 	public static void main(String[] args) {
		
// 		ThisKeyword thisK = new ThisKeyword();
// 		thisK.num();
		
// 	}
	

// }


/******************************************************************* */

var company1 = {

    fname: "tyss1",
    location: "btm1",
    a:10,

    greet: function(){
        // console.log(company2.fname)   //data leakage ,, therefore for security we use this keyword as this keyword is confined for its local block only
        console.log(this.fname);
    }
}

var company2 = {

    fname: "tyss2",
    location: "btm2",
    a: 30,
    greet: function(){
        var a=20
        console.log(a);             //20
        this.a=a
        console.log(this.a);        //20
        console.log(company1.a);    //10
        console.log(this.fname)     //tyss2
        console.log(company1);      //{ fname: 'tyss1', location: 'btm1', a: 10, greet: [Function: greet] }
        // console.log();
    }
}

company2.greet()