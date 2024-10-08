// Based on how we store data in memory and how we can access our data there are two types of data type
// primitive data type 

// primitive data type are call by value. when we take a data from a memory than in this data type we get copy of that data also what we change in that data is changed in a copied data.

//  7 type==> string, number,boolean,null(empty),undefined , symbol(kise bhi value ko unique banane k liye use kartey hai), BigInt


const score= 100
const scorevalue= 100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id= Symbol('123')
const anotherid= Symbol('123')
console.log(id===anotherid);


const bigNumber=123456789098765432345678987654n
console.log(typeof bigNumber)



//non-primitive data type or reference type

// yeh wo value hai jinka memory me reference directly allocate kiya ja sakta hai

// Array, objects, Functions 

//  JS is a 

const heros =["hanuma ji","iron man","captian america"]
let myObj={
    name:"astha",
    age:21
}
console.log(typeof myObj);
console.log(typeof heros);

const myFunction =function(){
    console.log("hello world");
}
console.log(typeof myFunction);



