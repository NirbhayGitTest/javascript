// var pro = new Promise((resolve , reject) => {
//     let x="ty";
//     let y="tys";
//     if(x==y){
//         resolve("x and y are equal")
//     }
//     else{
//         reject("x and y not equal")
//     }
// })

// pro.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})


/***************************************************************************** */
// async function sync(){
//     console.log("start");


// var p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("in progress")
//     }, 2000);
// })

// await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})

// console.log("end");
// }
// sync()

/****************************************************************************** */
//with reject :-

// async function sync(){
//     console.log("start");


// var p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("resolve in progress")
//     }, 2000),
//     setTimeout(()=>{
//         reject("reject in progress")
//     }, 2000)
// })

// await p.then((msg)=>{console.log(msg);}).catch((msg)=>{console.log(msg);})

// console.log("end");
// }
// sync()