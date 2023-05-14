import React from "react";
const Movie=(props)=>{
    return(
        <li>
            <h2>{props.title}</h2>
           
            <h2>{props.openingText}</h2>
        </li>
    )
}
export default Movie