import React from "react";
import Katie from './assets/girl.png'
import Star from './assets/star.png'
export default function Card() {
  return (
    <>
      <div className="pics">
        <img src={Katie} alt="girl" />
        <div className="info">
          <img src={Star} alt="star" className="stars" />
          <p>5.0 (6). USA</p>
        </div>
        <p className="other">Life lessons with Katie Zafares</p>
      </div>
     
    </>
  )

}