import React from "react";
import Star from './assets/star.png'
import Girl from './assets/girl.png'
import data from "./data";

export default function Card(props) {
  return (  
    ///
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
      </div>
      <div className="others">
        <p>{props.price}</p>
      </div>
    </div>
    
  );

}
