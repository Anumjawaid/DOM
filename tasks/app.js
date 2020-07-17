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
x = +prompt("Enter length of 1st side");
y = +prompt("Enter length of 2st side");
z = +prompt("Enter length of 3st side");
function S(a,b,c){
    return ss=( a + b + c ) / 2
    

}

function area (a,b,c){
    var Ss=S(a,b,c)
    var are = Ss*((Ss - a)*(Ss -b)*(Ss - c))
alert("The Area Of triangle is "+are)
console.log(are)

}
area(x,y,z)