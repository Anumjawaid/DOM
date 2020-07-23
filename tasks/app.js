// Assignment 38-44 
//Write a custom function power ( a, b ), to calculate the value of a raised to b
// var a=Number(prompt("Enter Number:"))
// var b=Number(prompt("Enter power:"))
//  function power(a,b){
//      res=a**b
//      document.write("Power of "+a+" raised to "+b +" is "+res)

//  }
//  power(a,b)

//2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not.
//  function leap(year){
//     if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
// 		{
// 			alert(year+" is a leap year");  
// 		}
// 		else
// 		{
// 			alert(year+" is not a leap year");  
//         }    
//     }
// var a = +prompt("Enter Year to check if it's a leap year or not:")
// leap(a);
// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
// x = +prompt("Enter length of 1st side");
// y = +prompt("Enter length of 2st side");
// z = +prompt("Enter length of 3st side");
// function S(a,b,c){
//     return ss=( a + b + c ) / 2


// }

// function area (a,b,c){
//     var Ss=S(a,b,c)
//     var are = Ss*((Ss - a)*(Ss -b)*(Ss - c))
// alert("The Area Of triangle is "+are)

// }
// area(x,y,z)

//4. Write a function that receives marks received by a student in 3 subjects  
// function mainFunction(a,b,c)
// {
//     a = +prompt("Enter marks of 1st subject:");
//     b = +prompt("Enter marks of 1st subject:");
//     c = +prompt("Enter marks of 1st subject:");
//     function average(){
//         var avg = (a+b+c) / 3;
//         return avg;
//     }
//     function percent(){
//         var sum = a + b + c;
//         var total = 300;
//         var per = (sum / total)*100;
//         return per
//     }
//     document.write("Average marks: "+average()+"</br>"+"Percentage: "+ percent()+"%");
// }
// mainFunction();

// 5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now

// function index(str,val){
//     for( a in str){
//         if (str[a]===val){

//             console.log(a)

//         }
//         else{

//         }
//     }
// }
// index("abcde",'c')

// 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.
// function vowd(str){
//     console.log(str.replace(/[aeiou]/g,''))
// }
//  vowd("quick brown fox")

//  7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text
// var vow=['a','e','i','o','u']
// console.log(vow.includes(curr)&& vow.includes(next))
// function occurence(str){
// for (a in str) {

//     var curr = str[a]
//     var wc = 0
//     var next = str[a + 1]
//     if (vow.includes(curr) && vow.includes(next)) {
//         var word = curr + next
//         console.log("Ocurrences " + wc)
//         wc++

//     }
//     else{

//     }
// }
// }
// occurence("Pleases read this application and give me gratuity")

// 8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters.
// var c=Number(prompt('Enter distance of city in Km'))
// function meter(distance){
//     var m = distance * 1000;
//     document.write("Distance in meter: "+ m+ " m"+"</br>");
//     return m ;
// } 
// function feet(distance){
//    var f = distance * 3280.84;
//    document.write("Distance in feet: "+ f+ " feet"+"</br>");
//    return f ;
// } 
// function inch(distance){
//    var i = distance * 39370.1;
//    document.write("Distance in inches: "+ i+ " inches"+"</br>");
//    return i ;
// } 
// function centimeter(distance){
//    var c = distance * 100000;
//    document.write("Distance in centimeter: "+ c+ " cm"+"</br>");
//    return c ;
// } 
// meter(c);
// feet(c);
// inch(c);
// centimeter(c);

// 9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour.
// var hour=Number(prompt('Enter working hours total'))
// if (hours>40){
//     var addi=hours-40
//     addi=1200*addi
//     document.write("your salary is "+addi)
// }

//10. A cashier has currency notes of denominations 10, 50 and 100 

/* var amount = +prompt("Enter your amount in hundreds");
var hundred = Math.floor( amount/100);
amount = amount - hundred*100 
document.write("You will have "+hundred+ " hundreds notes ");
var fifty = Math.floor(amount/50); 
amount = amount - fifty*50
document.write(fifty+ " fifty notes ");
amount = Math.floor(amount/10);  
document.write(amount + " ten notes"); */

// Assignment #42-44
// 1. Show an alert box on click on a link.
// function ale(){
//     alert("Alert on link")
// }
// 2. Display some Mobile images in browser. On click on an image Show the message in alert to user.
// function imaalert(){
//     alert("Thanks for Purchasing a Phone from us")
// }

// 3. Display 10 student records in table and each row should contain a delete button. If you click on a button to delete a record, entire row should be deleted.

// function del(id){
//     document.getElementById(id).remove()

// }

// 4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout
// function newim(){
//     document.getElementById('img1').src='https://vignette.wikia.nocookie.net/p__/images/9/99/105_001.PNG/revision/latest?cb=20150619170202&path-prefix=protagonist'
// }
// function oldim(){
//     document.getElementById('img1').src='https://i.ytimg.com/vi/vLbNsPD_pm8/maxresdefault.jpg'
// }

// 5. Show a counter in browser. Counter should increase on click on increase button and decrease on click on decrease button. And show updated counter value in browser.
// var number=0;
// function increase(){
//     number++
//     document.getElementById('num').innerHTML=number
// }
// function decrease(){
//     number--
//     document.getElementById('num').innerHTML=number
// }
// Assignment 49-52
// 1. Create a signup form and display form data in your webpage on submission.
// var val=document.getElementById('form')
// function submit(){
//       for (a in val){
//           document.write(val[a].value+"<br>")
//       }
   
// }
// 2. Suppose in your webpage there is content area in whichyou have entered your item details, but user can only seesome details on first look. When user clicks on “Readmore” button, full detail of that particular item will bedisplayed.
// function show(){
//     document.getElementById('pl').innerHTML=document.getElementById('ml').innerHTML
// }

// Assignment No :58-63
// Q1
// i
// var con=document.getElementById('main-content')
// ii

// var c=document.getElementById('main-content')
// for (var i=1;i<10;i+=2)
// {console.log(c.childNodes[i])}

// iii
// Get all elements of class “render” and show their innerHTMLin browser.

// var n=document.getElementsByClassName('render')
// for(var i=0;i<5;i++){
// console.log(n[i].innerHTML)}

// iv. Fill input value whose element id first-name using javascript.

// var f=document.getElementById('first-name')
// f.value="ABCD"

// v. Repeat part iv for id ”last-name” and “email”.
// var f=document.getElementById('last-name')
// f.value="XYZ"

// var f=document.getElementById('email')
// ff.value="abcxyz89@medium.com"

// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”

// var f=document.getElementById('form-content')
// console.log(f.nodeType)
// ii. Show node type of element having id “lastName” and its child node.

// var l=document.getElementById("lastName")
// console.log(l.nodeType)
// console.log(l.childNodes[0])

// iii. Update child node of element having id “lastName”.

// var l=document.getElementById("lastName")
// l.childNodes[0].textContent="Updated"
// console.log(l.childNodes[0])

// iv. Get First and last child of id “main-content”.

// var m=document.getElementById("main-content")
// console.log(m.childNodes.length)
// console.log(m.childNodes[1])
// console.log(m.childNodes[9])

// v. Get next and previous siblings of id “lastName”.
// var ln=document.getElementById('lastName')

// vi. Get parent node and node type of element having id “email”
var p=document.getElementById('email')
console.log(p.nodeType)
console.log(p.parentNode)

