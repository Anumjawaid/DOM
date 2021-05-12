var empArr={
    'fn':['JOE','BOB','ERIC','HUGUES','LUCIE','GREG','FELICIA','TED'],
    'Ln':['BLOB',"GRATTON",'LAPALME','BRETON','LU',"GROSOUS",'FAITOUT','TRAHAN'],
    'desig':['PRESIDENT',"VPRESIDENT","SECREARY",'SRPROG',"JRPROGRAMMER",'ACCOUNTANT',"MARKETER","CLERK"],
    'Age':[52,54,38,42,22,64,28,25],
    'Salary':[100000,80000,75000,72000,45000,6500,60000,40000]
}


// added into select
var x=document.getElementById("selectname")
var c=document.createElement('option')
console.log(empArr.fn.length,"length")
console.log(Object.keys(empArr).length,"lengthkeys")
for (let index = 0; index < empArr.fn.length; index++) {
    const firna = empArr.fn[index];
    const lastna = empArr.Ln[index];
    var ops=firna +" "+ lastna
   var c=document.createElement('option')

    console.log(ops,"options")
    c.text=ops
    x.options.add(c)
    
}
console.log(x.value,"chek")
// end added
var fn=document.getElementById('fn')
var ln=document.getElementById('ln')
var desig=document.getElementById('desig')
var sal=document.getElementById('sal')
var age=document.getElementById('age')
document.getElementById("fn").disabled = true;
document.getElementById("ln").disabled = true;
document.getElementById("desig").disabled = true;
document.getElementById("sal").disabled = true;
document.getElementById("age").disabled = true;
function settext(){
    var b=String(x.value).indexOf(" ")
    var ind=String(x.value).slice(0,b)
    var i=empArr.fn.indexOf(ind)
    fn.value=empArr.fn[i]
    ln.value=empArr.Ln[i]
    desig.value=empArr.desig[i]
    sal.value=empArr.Salary[i]
    age.value=empArr.Age[i]

    console.log(empArr.fn[ind],"e")
    console.log(String(x.value))
    console.log(String(x.value).indexOf(" "),"fg")
    console.log(empArr.fn.indexOf(ind),"k")

}

fn.value=empArr.fn[0]
