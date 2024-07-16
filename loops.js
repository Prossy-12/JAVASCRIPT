//print 0 to 5 using console .log
   let m=0;// initilization

   console .log(0);
   console .log(2);
   console .log(3);
   console .log(4);
   console .log(5);
   //the for loop
   for(let m=0; m<=5;m++){
console . log(m);

   }
 for(let w=5; w<=0;w++){
    console. log(w)
 }

for(let w=5; w>=0; w--){
    console . log(w);
}

let numbers =[1,2,3,4,5]
for(let i=0;i<numbers.length;i++){
    let add=numbers[i]+15;
    console . log(add);
}
//initialization , condition, increment/decrement
let sum=0
for(i=0; i<numbers.length;i++){
sum=sum+numbers[i]
}
console .log(sum)

// a loop which prints the word hello 5  times on the screen
for(let x=0;x<5;x++){
console .log("hello world");

}
//while loops
let n = 0
while( n<=5){
   console . log(n)
     n++
      }
//do while
let r=0
do {

   console .log(r)
   r++
}
while(r<=5)
     
// if uk how many times use for
   for(let m=0; m<=5; m++){
      console .log(m)
   }
// for of (used for arrays)
let number1 =[1 ,2,3,4,5]
for(let i=0;i< number1.length;i++){
   let add= number1[i]+20;
 console .log(add)
}
for(const digit of number1){
   console. log(digit);
}
let cereals=["beans","maize","groundnuts"]
for(const grain of cereals){
   console.log(grain);
}
 const produceList= [{name:"beans", type:"legumes",weight:100,cost:50000},
   {name:"maize", type:"grain",weight:2000, cost:700000},
   {name:"groundnuts",type:"grain",weight:1500,cost:600000}]

 for (const produce of produceList){
  console.log(`name:${produce.name},type:${produce.type},weight:${produce.weight},cost:${produce.cost}`)

 }