
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

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3>Products</h3>
      <Switch>
      {/* use exact path to only show the route */}
        <Route exact path="/">
          <NewProductForm></NewProductForm>
          <hr />
          <AllProducts></AllProducts>
        </Route>
        
        <Route exact path="/ProductManagers/:_id">
        <OneProduct></OneProduct>
        </Route>
      
      
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
