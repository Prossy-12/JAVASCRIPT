function greet(name){
    console .log ("hi,"+ name +".")
greet("prossy");

}
//declaring a function without aparameter
function areaOfCricle(radius){
let area = Math.PI*radius*radius


return area;

}
console .log(areaOfCricle(400))

function sum (a,b){
  let add=a+b 
  return add; 
}
console .log(sum(5,5))
//arrow functions
const sum2= (a,b)=>a + b;

console.log(sum2(5,6));
//function to multiply two numbers
function multiply(c,d){
    let answer =c*d
    return answer;
}
console .log(multiply(56,7));
// function to gravity
function product(m,g=9.81){
    let weight = m*g
   return weight +"N";
}
console. log(product(6));










