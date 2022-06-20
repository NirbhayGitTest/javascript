//case 1
// function add(a,b,callback){
//     callback()
//     console.log("this is add function");
// }

// function sample(){
//     console.log("this is sample function");
// }

// add(1,2,sample)


//case 2
// function add(callback){
//     callback()
//     console.log("this is add function");
// }

// function sample(){
//     console.log("this is sample function");
// }

// add(sample)


//case 3
function ecommerce(status){
    var result = status()
   if(result() == "paymentsuccessfull"){
    console.log("product booked successfully");
   }
   else{
    console.log("insufficient balance");
   }
}
ecommerce(function paymentStatus(){
    return function(){
        return "paymentsuccessfull"
    }
})

//step1 : ecommerce() is being invoked
//step2 : status() == paymentStatus()   ==> call back function , name has been overridden
//step3 : invoking the paymentStatus() function in line 29(var result = status())
//step4 : return == function() {                ==>line 29 (result is having the anonymous function)
            // return "paymentsuccessfull"
            //}
//step5 : invoking the result function in line 30(if(result() == "paymentsuccessfull"){)
//step6 : redirected to line 38
//step7 : returns the data "paymentsuccessfull"
//step8 : redirected to line 30 (if condition)
//step9 : if the returned data is matching with the condition provided in if statement  =>  if block will be executed or else block is executed