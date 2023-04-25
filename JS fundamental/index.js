// console.log("Hello world")

// Javascript course
/*
Hi my name is krishnendu roy
Clg MSIT
CSE 
*/

// javascript datatype

// Primitive datatype
// 1. String
// 2. Number
// 3. Boolean
// 4. Bigint
// 5. Undefined
// 6. NULL

// Non primitive datatype
// 7. Symbol
// 8. Object
// function

// let, var, const

// String
let str1 = "Krishnendu roy";
// console.log(typeof str1)

// Number
let num1 = 45;
// console.log(typeof num1)

// boolean
let b1 = false;
// console.log(typeof b1)

let bg1 = 1237371263n;
// console.log(typeof bg1)

// Undefined
let a;
// console.log(a)

// Null
let n1 = null;
// console.log(n1)

// let, var, const
let msit = "msit";
// console.log(msit)

// Oparators
// + Addition
// -
// *
// **
// /
// %
// ++
// --

// Comparison Oparators
// ==
// ===

let var2 = 1;
// console.log(var2 === "1")

// Condition
// if(1 == 1){
//     do something
// }

// const exp = 1;
// if(exp > 5){
//     console.log("SDE2")
// }else if(exp > 3){
//     console.log("SDE1")
// }else if(exp > 1){
//     console.log("intern")
// }else{
//     console.log("DSA karle ho jayaga :) don't worry")
// }

// Old function
// function nameFunc(name) {
//     console.log(name)
// }

// New function
// const nameFunc = (str)=>{
//     return eval(str)
// }

// const rval = nameFunc("20 + 10")
// console.log(rval)

// const PI = 3.14
// console.log(Math.SQRT2)

// let num = 10.1
// console.log(Math.round(num)) // round >= 5 ceil else floor
// console.log(Math.floor(num)) // 10
// console.log(Math.ceil(num)) // 11

// Array
var arr1 = [10, 200, 30, 50, 100];

// var temp = []
// for(let i = 0; i<arr1.length; i++){
//     if(arr1[i] < 50){
        // temp.push(arr1[i])
//     }
// }

// arr1.forEach((item)=>{
    // console.log(item)
// })

const temp = arr1.filter((item) => item < 50);
// console.log(temp);


// Map & Set
// key -> Value
const m1 = new Map()
// m1.set("FName", [1, 2, 3])
// m1.set("LName", "Roy");
// m1.set("FName", "Roy")

// console.log(m1)
// console.log(m1.get("FName"))
// console.log(m1.size)


// class Map{
//     Map(){
//         key =   []
//         value = []
//     }
// }


// const s1 = new Set()
// s1.add(1)
// s1.add(2)
// s1.add(3)
// s1.add(4)
// console.log(s1)
// s1.delete(4)
// console.log(s1)



// class Set{
//     Set(){
//         value = []
//     }
//      let get()
//      let set()

// }


// const obj = {
//     firstname: "Anurag",
//     lastname: "Roy",
//     age: 100,
//     eyeColor: "Red after coding"
// }

// console.log(obj.firstname)


// Datetime
// const date = new Date("Apr 4, 2020")
// // console.log(date)


// Q1
// date1 = Apr 4, 2022
// date2 = Apr 4, 2023

// Ans=>
// const date1 = new Date("Apr 4, 2022")
// const date2 = new Date("Apr 4, 2023")

// const total_time_in_second = Math.abs(date2 - date1)/1000
// console.log("Seconds :"+total_time_in_second)

// const total_time_in_days = Math.floor(total_time_in_second/(60 * 60 * 24));
// console.log("Days :"+total_time_in_days)


// SetInterval
// const called = setInterval(()=>{
//     console.log("Called")
// }, 1000)

// const stop = ()=>{
//     clearInterval(called)
// }


// Q2
// 21:18:0

// Ans=>

// const clock = setInterval(()=>{
//     const date = new Date();
//     console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())
// }, 1000);