import React from 'react';
import './Meals.css'
import {InputGroup,FormControl,Row} from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import Meal from '../Meal/Meal';


const Meals = () => {

    const [searchText,setSearchText] = useState('');
    const [meals,setMeals] = useState([]);

    const handleInput = (e) =>{
        setSearchText(e.target.value);
    }
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
        `)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
        
    },[searchText]);
    // console.log(meals);

    return (
        <div className='text-center'>
            <h1>Search Your Meals</h1>   
            <InputGroup className="my-3 w-25 mx-auto">
            <FormControl
            placeholder="Meal Name"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={handleInput}
            />
            <InputGroup.Text id="basic-addon2" onClick={handleInput}>Search</InputGroup.Text>
            </InputGroup>
            <Row xs={1} md={3}  className="g-4">
            {
                meals.map(meal => 
                    <Meal
                        key={meal.idMeal}
                        meal = {meal}
                    ></Meal>
                )
            }
            </Row>
            
            
        </div>
    );
};

export default Meals;