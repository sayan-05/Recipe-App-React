import React from 'react';
import './Item.css'

const Item = (props) => {
    return (<>
        <div className="recipes" >

            <h1> {props.source.recipe.label} </h1>
            <div className='ingre' >
                {
                    props.source.recipe.ingredients.map(
                        (ingredients) => {
                            return (
                                <ul>
                                    <li>
                                        {ingredients.text}
                                    </li>
                                </ul>
                            )
                        }
                    )
                }

            </div>
            <div>
                <p> <span className='calorie' > <h3>Calories : </h3> </span  > <span className='calNo' >{props.source.recipe.calories} </span> </p>
                <p className='weight' > <span><h3> Total Weight :  </h3></span > {props.source.recipe.totalWeight} </p>
            </div>
            <img src={props.source.recipe.image} alt="Food" width='200px' className='image' />

        </div>
    </>
    )
}



export default Item;