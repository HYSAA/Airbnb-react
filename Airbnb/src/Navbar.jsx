import React from "react";
import airbnb from './assets/airbnb-logo.png'
import photo from './assets/photo-grid.png'

export default function Navbar(){


    return (
      <>

      <nav className='navbar'>
    <img src={airbnb} alt="airbnb" />
    </nav>
    <div className="menu">
    <img src={photo} alt="photo" /> 
  
    </div>
    <div className="text">
     
    <h1>Online Experiences</h1>
    <p>Join unique interactive activities led by 
    </p> 
     <p>one-of-a-kind hosts-all without leaving home.
    </p>
    </div>
      </>
    )
}