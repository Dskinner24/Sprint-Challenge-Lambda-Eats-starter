import React from "react";
import { Button, Navbar, Card, CardImg } from 'reactstrap';
import { Route, Link } from 'react-router-dom';
import PizzaForm from './Components/PizzaForm';
const App = () => {
  return (
    <>
    <Navbar color='danger'>
      <h1 style={{ color: 'black'}}>Lambda Eats</h1>
      <Link to={'/'}>
        <Button color='danger' style={{color: 'black'}}>
          Home
        </Button>
      </Link>
    </Navbar>
    <Route exact path='/'>
      <Card>
        <CardImg src={require("../src/imgs/pizza1.jpg")}/>
        <Link to={'/pizza'}>
          <Button color='danger' style={{color: 'black', position: 'absolute', left: '50%', top: '50%'}}>
            Pizza
          </Button>
        </Link>
      </Card>
    </Route> 
    <Route path='/pizza'>
      <PizzaForm/>
    </Route>  
    </>
  );
};
export default App;
