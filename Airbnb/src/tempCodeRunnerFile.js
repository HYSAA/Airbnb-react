const numbers = [123, 456, 789, 987];

const example = () =>{

let lastDigits = numbers.map((bin=>{

return (bin % 10)   
})) 
console.log(lastDigits); // Output: [3, 6, 9, 7]
}
example();

