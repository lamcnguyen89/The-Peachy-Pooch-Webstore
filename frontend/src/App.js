import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (

   <BrowserRouter>

    
      <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">The Peachy Pooch!</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Page Content */}
      
      
  
      <main className="container p-2 my-4">
        <div className="row">
            <div className="col-lg-3">
              <h1 className="mt-4 headingFormats">The Peachy Pooch</h1>
              <h4 className="mb-4 headingFormats">Whole Food Healthy Dog Treats to take care of your loyal companion</h4>
            </div>
          
            <div className="col-lg-9">

                  <Route exact path="/" exact={true} component={HomeScreen} />
                  <Route exact path= "/products/:id" component={ProductScreen} />

  
            </div>

        </div>

      </main>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright © Your Website 2020</p>
        </div>
      </footer>
    </div>
</BrowserRouter>
  
  );
}

export default App;
