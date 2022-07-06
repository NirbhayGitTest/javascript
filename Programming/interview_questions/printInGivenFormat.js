//Print in given format :-  [ 'selenium : java', 'webdriverio : js', 'terminal : console' ]


var a = ["selenium" , "webdriverio" , "terminal"]

var b = ["java" , "js" , "console"]

var c = []

for(var i=0;i<a.length;i++)
{
    c.push(a[i] + " : " + b[i])          //  o/p                 :- [ 'selenium : java', 'webdriverio : js', 'terminal : console' ]
    // c.unshift(a[i] + " : " + b[i])          //  o/p (reverse order) :- [ 'terminal : console', 'webdriverio : js', 'selenium : java' ]
}
console.log(c);