import React from 'react';
import './Meal.css';
import {Button, Card,Col} from 'react-bootstrap';
import {Redirect,Link} from 'react-router-dom';

const Meal = (props) => {
   
    const {strMealThumb,strMeal,strInstructions,strArea,idMeal} = props.meal;
    // console.log(props);
    const url = '/meal/'+idMeal;
    

    
    return (       
           
                <Col>
                    <Card>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0,300)}
                    </Card.Text>
                    <Link to={url}>
                        <Button >
                            Details
                        </Button>
                    </Link>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Origin: {strArea}</small>
                    </Card.Footer>
                    </Card>
                </Col>
           
        
    );
};

export default Meal;