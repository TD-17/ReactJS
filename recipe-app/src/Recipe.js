import React from 'react';

const Recipe = ({title, calories, image}) => {
    return(
        <div>
            <h1>{title}</h1>
            <p><b>calories :</b> {calories}</p>
            <img src={image} alt=""/>
        </div>
    )
}

export default Recipe;
