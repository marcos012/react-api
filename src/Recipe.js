import React from 'react';
import style from './recipe.module.css'

export default function Recipe({ title, image, ingredients }) {
    return (
        <div className={style.recipe}>
            <div className={style.center}>
                <h1>{title}</h1>
                <img className={style.image} src={image} alt="" />
            </div>
            <ol className={style.ingredients}>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}
