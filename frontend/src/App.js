import React from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import OrderScreen from './screens/OrderScreen';
import OrdersScreen from './screens/OrdersScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import SigninScreen from './screens/SigninScreen';
import ContactScreen from './screens/ContactScreen';
import ErrorScreen from './screens/ErrorScreen';
import ThanksScreen from './screens/ThanksScreen';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
 
  return (

   <BrowserRouter>

    
      <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            The Peachy Pooch!
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <Link className="nav-link" to="/">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                {userInfo ? 
                  (<Link className="nav-link" to="/profile">{userInfo.name}</Link>) 
                    : 
                  (<Link className="nav-link" to="/signin">Sign In</Link>)
                } 

              </li>
              <li className="nav-item">
                  {userInfo && userInfo.isAdmin && 
                      (<Link className="nav-link" to="/orders">View Customer Orders</Link>)}
              </li>
              <li className="nav-item">
                  {userInfo && userInfo.isAdmin && 
                      (<Link className="nav-link" to="/products">Edit Products</Link>)}     
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
          
            <div className="content col-lg-9">
                  <Route path="/" exact={true} component={HomeScreen} />
                  <Route path= "/product/:id" component={ProductScreen} />
                  <Route path="/orders" component={OrdersScreen} />
                  <Route path="/profile" component={ProfileScreen} />
                  <Route path="/order/:id" component={OrderScreen} />
                  <Route path="/shipping" component={ShippingScreen} />
                  <Route path="/payment" component={PaymentScreen} />
                  <Route path="/placeorder" component={PlaceOrderScreen} />
                  <Route path="/signin" component={SigninScreen} />
                  <Route path="/register" component={RegisterScreen} />
                  <Route path="/cart/:id?" component={CartScreen} />
                  <Route path="/products" component={ProductsScreen} />
                  <Route path="/contact" exact={true} component={ContactScreen} />
                  <Route path="/thanks" exact={true} component={ThanksScreen} />
                  <Route path="/error" exact={true} component={ErrorScreen} />

            </div>

        </div>

      </main>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright © The Peachy Pooch 2020</p>
        </div>
      </footer>
    </div>
</BrowserRouter>
  
  );
}

export default App;
