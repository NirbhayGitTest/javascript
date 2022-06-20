var sum = function (a,b,c) {
    console.log(a+b+c);
}(1,2,3)
console.log(sum)


//with return (good)
var sum = function (a,b,c) {
    return a+b+c;
}
console.log(sum(3,3,3));