var input_one=document.querySelector(".inputone")
var input_two=document.querySelector(".inputtwo")
var plus=document.querySelector(".plus")
var minus=document.querySelector(".minus")
var multiply=document.querySelector(".multiply")
var divide=document.querySelector(".divide")
var equal=document.querySelector(".equal")
plus.onclick=function(){
var result=parseInt(input_one.value)+parseInt(input_two.value)
console.log(result)
equal.innerHTML =`result = ${result}`
}
minus.onclick=function(){
var result=parseInt(input_one.value)-parseInt(input_two.value)
console.log(result)
equal.innerHTML =`result = ${result}`



}
multiply.onclick=function(){
var result=parseInt(input_one.value)*parseInt(input_two.value)
console.log(result)
equal.innerHTML =`result = ${result}`




}
divide.onclick=function(){
var result=parseInt(input_one.value)/parseInt(input_two.value)
console.log(result)
equal.innerHTML =`result = ${result}`



}
