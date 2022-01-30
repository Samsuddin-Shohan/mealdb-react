import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MealDetails = () => {
    const param = useParams();
    const {idMeal} = param;
    const [meal,setMeal] = useState({});
    const {strArea,strCategory,strInstructions,strMeal,strTags,strMealThumb} = meal;
    
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}
        `)
        .then(res => res.json())
        .then(meal =>setMeal(meal.meals[0]))
    },[]);
    return (
        <div className='d-flex my-5 justify-content-center flex-column align-items-center' >
        <div>
        <img src={strMealThumb} alt="" className='w-25' />
        <h1>{strMeal}</h1>
        <h2>{strArea}</h2>
        <h3>{strCategory}</h3>
        <h4>{strTags}</h4>
        <p>{strInstructions}</p>
        </div>
        
            
        </div>
    );
};

export default MealDetails;