import React from "react";


export default function Date(){

const date = new Date()
const hours= date.getHours()
let timeofDay;

if(hours<12){
    timeofDay="morning"
}else if(hours>=12 && hours <17){
    timeofDay="afternoon"
}
else{
    timeofDay="evening"
}



return(
<div>
<h1>{timeofDay}</h1>
</div>

) 

}