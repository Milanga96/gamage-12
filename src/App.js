import React from 'react';
import Header from './components/Header'
import Products from './components/products'
import {BrowserRouter as Router} from 'react-router-dom';
import {ProductsDetails} from './components/ProductsDetails';

function App ()  {
  return(
    <ProductsDetails>
    <div className="App">
      <Router>
      <Header/>
      <section>
          <Products/>
      </section>
      </Router>
    </div>
    </ProductsDetails>
  );
}

export default App;