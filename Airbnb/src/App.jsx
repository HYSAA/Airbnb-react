import './App.css'
import Card from './Card'
import Navbar from './Navbar'
import Date from './Date'
import Katie from './assets/girl.png'
import Star from './assets/star.png'
import data from './data'
console.log(data)



function App() {
  
  const testData = data.map(item => {
 return (
 <Card
 className="custom-card"
 img={item.coverImg}   
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
    
  <testData/>
 

    
      </>
  )
}



export default App



