import React from "react";
import Katie from './assets/girl.png'
import Star from './assets/star.png'
export default function Card(){
    return(
    <>
   <div className="pics">
<img src={Katie} alt="girl" />
<img src={Star} alt="star"/>
</div>
    </>
    )

}