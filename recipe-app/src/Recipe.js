import React from 'react';
import style from '.';

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol> 
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p><b>calories :</b> {calories}</p>
            <img src={image} alt=""/>
        </div>
    );
};

export default Recipe;
