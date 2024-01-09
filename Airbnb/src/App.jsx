import './App.css'
import Card from './Card'
import Navbar from './Navbar'
import Date from './Date'
import Katie from './assets/girl.png'
import Star from './assets/star.png'
function App() {
  

  return (
    <>
     <Navbar></Navbar>
     <Card
     img={Katie}   
     rating = "5.0"
     reviewCount= {6}
     country="Japan"
     title= "Life Lesson with Katie Zaferes"
     price = {"From $136 / person"}
     />
    <Card 
      img={Katie}   
      rating = "5.0"
      reviewCount= {6}
      country="Japan"
      title= "Life Lesson with Katie Zaferes"
      price = {"From $136 / person"}
    />
    </>
  )
}



export default App
