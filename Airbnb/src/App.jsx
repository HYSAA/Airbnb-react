import './App.css'
import React from "react"
import Navbar from "./Navbar"

import Card from "./Card"
import data from "./data"
console.log(Navbar)

function App() {
  
  const testData = data.map(item => {
 return (
 <Card
 key= {item.id}
 className="custom-card"
 img={item.img}   
 rating = {item.stats.rating}
 reviewCount= {item.stats.reviewCount}
 country={item.country}
 title= {item.title}
 price = {item.price} 
 />
 )
  })


  


  return (
    <>
    <Navbar></Navbar>
    
  {testData}
 
 

    
      </>
  )
}



export default App



