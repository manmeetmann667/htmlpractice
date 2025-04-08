// // // console.log("Hello World")

// // // var a  = 5
// // // var b = 10

// // // console.log(a+b)

// // // function name(name){
// // //     console.log("This is name" + name)
// // // }

// // // name("manmeet")

// // // const function1 = (x)=>{
// // //     console.log(x)
// // // }
// // // function1(34)

// // // let num1  = parseFloat(prompt("enter first number:"));
// // // let num2  = parseFloat(prompt("enter second number:"));
// // // let operator  = (prompt("enter operation:"));

// // // function calculator(a,b,operation){

// // //     let isfault = Math.random()<0.1;

// // //     if (isfault){
// // //         switch(operation) {
// // //             case '+':
// // //               return a - b; 
// // //             case '-':
// // //               return a / b; 
// // //             case '*':
// // //               return a + b; 
// // //             case '/':
// // //               return a ** b; 
// // //             default:
// // //               return "Invalid operator";
// // //           }

// // //     }
// // //     else{
// // //         switch(operation) {
// // //             case '+':
// // //               return a + b;
// // //             case '-':
// // //               return a - b;
// // //             case '*':
// // //               return a * b;
// // //             case '/':
// // //               return a / b;
// // //             default:
// // //               return "Invalid operator";
// // //           }
// // //     }

// // // }

// // // calculator(num1,num2,operator)

// //  a = "manmeet";
// //  console.log(a.concat("Manmeet"));
// //  console.log(a);

// //  let x = [1,2,4,3,5,3,2,4]

// //  let newarr = x.map((e)=>{
// //     return e**2
// //  })

// //  let newarr1 = x.reduce((a,b)=>{
// //       return  a*b
// //  })



//  let y = 4;
//  let a = 1;
//  for(let p = 1;p<=y;p++){
//     a = a*p;
//  }
 
//  let s = [1,2,3,4];

 
//  let arr1 = s.reduce((a,b)=>{
//     return a*b

//  })

// console.log(arr1);

// console.log("Harry")

// document.querySelectorAll(".box").forEach(e=>{
//     console.log(e);
//     e.style.backgroundColor = "green";
// })

// document.getElementsByTagName("div")

let count = 0;

function increase(){
    document.getElementById("count").textContent = count;
    count++;
    if(count>10){
        alert("Not greater than 10")
    }
}
function decrease(){
    document.getElementById("count").textContent = count;
    count--;
    if(count<0){
        alert("Not less than 0")
    }
}
function reset(){
    count = 0;
    document.getElementById("count").textContent = count;
}