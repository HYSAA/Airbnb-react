// /*
// Challenge 1:
// Given an array of numbers, return an array of each number, squared
// */
// const nums = [1, 2, 3, 4, 5]
// // -->       [1, 4, 9, 16, 25]
// // Your code here
// const map1 = nums.map((x) => x * x)

// console.log(map1)



// /*
// Challenge 2:
// Given an array of strings, return an array where 
// the first letter of each string is capitalized
// */

// const names = ["alice", "bob", "charlie", "danielle"]
// // -->        ["Alice", "Bob", "Charlie", "Danielle"]
// // Your code here

// const cap = names.map((name) => name.charAt(0).toUpperCase()+name.slice(1));

// console.log(cap)



// /*
// Challenge 3:
// Given an array of strings, return an array of strings that wraps each
// of the original strings in an HTML-like <p></p> tag.

// E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
// return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// */


// const monster=pokemon.map((mon) => `<p> ${mon}</p>`)
// // -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// // Your code here
// console.log(monster)

// const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

// const newa = pokemon.map((mon) =>{
//   return `<p>${mon}</p>`
// })

// console.log(newa)




// let exam= [1,2,3]


// const exam2= exam.map((pass =>{
// //  console.log( pass);
//   return  `<h1>${pass}</h1>`;
// }))



// //Given an array of numbers, create a new array where each element is twice the value of the corresponding element in the original array.

// Example:


// const numbers = [2, 4, 6, 8];
// // Your code here
// // Result: [4, 8, 12, 16]


// const func = () =>{



// const num= numbers.map((store  =>{
  
//  return store *2;



// }))
// console.log(num)
// }

// func()


// // Problem: Square the Numbers
// // Given an array of numbers, create a new array where each element is the square of the corresponding element in the original array.

// // Example:

// // javascript
// // Copy code
// const numbersss = [3, 5, 7];
// // Your code here
// // Result: [9, 25, 49]


// const testt2=()=>{

// const test2= numbersss.map((real =>{
// return (real * real)

// }))

// console.log(test2);
// }
// testt2();


// // 093336190270



// const words = ['apple', 'banana', 'orange'];
// // Your code here
// // Result: ['APPLE', 'BANANA', 'ORANGE']


// const bigWord = () =>{


// const wordss=words.map((w =>{

//  return(w.toUpperCase());

// }))

// console.log(wordss)
// }
// bigWord();




///practice array maps



// const words = ["apple", "banana", "orange", "grape"];


// const word= () =>{

// const wordLengths = words.map(bin =>{

// return bin.length;

// })

// console.log(wordLengths); // Output: [5, 6, 6, 5]

// }
// word();

// const temperaturesFahrenheit = [32, 68, 104, 212];

// // Your code here

// const temp= () =>{

//   const temperaturesCelsius = temperaturesFahrenheit.map((bin=>{
//    return (bin - 32) * (5/9)
//   }))

// console.log(temperaturesCelsius); // Output: [0, 20, 40, 100]
// }
// temp()


// const words = ["apple", "banana", "orange", "grape"];

// // Your code here
// words.match(aeiou)

// console.log(words)

// console.log(vowelsOnly); // Output: ["ae", "aa", "oae", "ae"]

const numbers = [123, 456, 789, 987];

const example = () =>{

let lastDigits = numbers.map((bin=>{

return (bin % 10)   
})) 
console.log(lastDigits); // Output: [3, 6, 9, 7]
}
example();









/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here


const neww= pokemon.map((nu =>{

    return `<p> ${nu} </p>`

}))

console.log(neww)


//
const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
let array = [...colors];
console.log(array);

// Check if 'array' is an array
const isArray = Array.isArray(array);

console.log(isArray);

//
const isArray = Array.isArray(array);

console.log(isArray);

