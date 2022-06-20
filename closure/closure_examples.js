/********************Example 1************************ */
console.log("********************Example 1************************ *")

var a=10
var b=50

function sample(){                                      //for sample global is lexically present

    console.log(a);
    var b=200
    console.log(b);

        function inner(){                               //for inner sample is lexically present

            var a=100
            var b=200
            console.log(a);
            console.log(b);
        }inner()
}sample()


/*******************Example 2*************************** */
console.log("********************Example 2************************ *")

var a=10
var b=50

function sample(){                                       //for sample global is lexically present
    console.log(a);
    console.log(b);
    var b=200
    console.log(b);

        function inner(){                               //for inner sample is lexically present
            console.log(a);
            var a=700
            console.log(b);
            console.log(a);
        }inner()
}sample()


/********************Example 3************************* */
console.log("********************Example 3************************ *")
//inner is lexically present inside the outer and outer is lexically present inside the global

function outer(value1){
    return function inner(value2){
        return (value1+value2)
    }
}

var add = outer(5)

// var add = function inner(value2){
//     return (value1+value2)
// }

console.log(add(7));

