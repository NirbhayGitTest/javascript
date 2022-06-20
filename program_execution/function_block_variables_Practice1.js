var s1=10
function ass1(a,b) {
    console.log(a+b);
    {

        function demo(c,d) {
            
            var e=1
            var f=2
            
            let g=3
            const h=4

            console.log(e);
            console.log(f);
            console.log(g);
            console.log(h);

            console.log(c+d);
        }demo(5,6)

    }
    
}ass1(3,4)


//global => f ass1(a,b)   s1=10
//local => a=3  b=4  e=1  f=2  c=5  d=6  e=1  f=2  g=3  h=4
//block => 
//script => 