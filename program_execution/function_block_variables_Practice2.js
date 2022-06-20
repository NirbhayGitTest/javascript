var s2=10
function ass2(e,f) {
    console.log(e+f);
    {
        var a=1
        var b=2
    }

    {
        let c=3
        const d=4
    }
    
}ass2(5,6)



//global => f ass2(e,f)   s2=10
//local => a=1  b=2   e=5  f=6
//block => c=3  d=4 
//script => 