import React from "react";
import Star from './assets/star.png'
export default function Card(props) {
  return (
    <>
      <div className="pics">
        <img src={props.img} alt="img" />
        <div className="info">
          <img src={Star} alt="star" className="stars" />
          <span>{props.rating}</span>
          <span>{props.reviewCount}</span>
          <span>{props.country}</span>
        </div>
        <div className="other">
        <p>{props.title}</p> 
        <p>{props.price}</p>
        </div>
      </div>
     
    </>
  )

}