import React, {useState} from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import AllProducts from './components/AllProducts';
import NewProductForm from './components/NewProductForm';
import OneProduct from './components/OneProduct';
import EditProductForm from './components/EditProductForm';

function App() {
    
  const [newProductToggle,setNewProductToggle] = useState(false);

  return (
    <BrowserRouter>
    <div className="App container">
      <h3>Products</h3>
      <Switch>
      {/* use exact path to only show the route */}
        <Route exact path="/">
          <NewProductForm newProductToggle= {newProductToggle} setNewProductToggle= {setNewProductToggle}></NewProductForm>
          <hr />
          <AllProducts newProductToggle= {newProductToggle}></AllProducts>
        </Route>
        
        <Route exact path="/ProductManagers/:_id">
        <OneProduct></OneProduct>
        </Route>
        
        <Route exact path="/edit/:_id">
        <EditProductForm></EditProductForm>
        </Route>
      
      
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
