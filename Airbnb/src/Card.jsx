import React from "react";
import Katie from './assets/girl.png'
import Star from './assets/star.png'
export default function Card() {
  return (
    <>
      <div className="pics">
        <img src={Katie} alt="girl" />
        <div className="info">
          <img src={Star} alt="star" />
          <p>5.0 (6). USA</p>
          <p>Life lessons with Katie Zafares</p>
          <p>This is the first paragraph.</p>
          <p>This is the second paragraph, and it will appear below the first one.</p>

          <p>asdasd</p>
        </div>

      </div>
      <p>Tes div</p>
    </>
  )

}