import React  from "react";
import style from './reciepe.module.css'
const Recipe = ({title, calories,image}) =>{
    return(
        <div className={style.reciepe}>
            <h1 >{title}</h1>
            <img src={image} alt="/" />
            <p>{"calories:  "+calories}</p>

        </div>
    )
}
export default Recipe;