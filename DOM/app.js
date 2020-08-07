console.log(document.childNodes[1].childNodes[0].childNodes[5].childNodes[0])//the head part
console.log(document.childNodes[1].childNodes[2].childNodes[1].childNodes[0])//for body
// paragraph
// var p=document.getElementsByTagName('p')
// var c=p[0].innerHTML
// console.log(c)
// excercise
var c=document.getElementById('main-content')
for (var i=1;i<10;i+=2)
{console.log(c.childNodes[i])}
// iii. Get all elements of class “render” and show their innerHTMLin browser.
var b=document.get