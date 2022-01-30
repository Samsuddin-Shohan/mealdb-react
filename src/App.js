import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Header from './components/Header/Header'
import './App.css';
import Home from './components/Home/Home';
import Meals from './components/Meals/Meals';
import Meal from './components/Meal/Meal';
import NotFound from './components/NotFound/NotFound.js'
import MealDetails from './components/MealDetails/MealDetails';

function App() {
  return (
    <div >
        <div>
          <Router>
            <Header></Header>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route exact path='/home'>
                <Home></Home>
              </Route>
              <Route exact path='/meals'>
                <Meals></Meals>
              </Route>
              <Route exact path='/meal/:idMeal'>
                <MealDetails></MealDetails>
              </Route>
              <Route>
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>
        </div>
    </div>
  );
}

export default App;
