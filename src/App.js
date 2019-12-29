import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';


function App() {
  return (
    <div className="container">
      <div className="row">
        <React.Fragment>        
          <Navbar></Navbar>
          <ProductList></ProductList>
          <Details/>
          <Cart/>
          <Default/>
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
