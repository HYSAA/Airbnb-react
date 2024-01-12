const temperaturesFahrenheit = [32, 68, 104, 212];

// Your code here

const temp= () =>{

  const temperaturesCelsius = temperaturesFahrenheit.map((bin=>{
   
   return (bin - 32) * (5/9)


  }))

console.log(temperaturesCelsius); // Output: [0, 20, 40, 100]
}
temp()