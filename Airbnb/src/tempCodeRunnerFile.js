const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here


const neww= pokemon.map((nu =>{

    return `<p> ${nu} </p>`

}))

console.log(neww)