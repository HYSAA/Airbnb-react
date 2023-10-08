import './App.css'
import Card from './Card'
import Navbar from './Navbar'
import Date from './Date'
import Katie from './assets/girl.png'
import Star from './assets/star.png'
function App() {
  
  /*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/
  return (
    <>
     <Navbar></Navbar>
     <Card
     img={Katie}   
     rating = "5.0"
     reviewCount= {6}
     country="Japan"
     title= "Life Lesson with Katie Zaferes"
     price = {136}
     />
     {/* <Date></Date> */}
    </>
  )
}



export default App
