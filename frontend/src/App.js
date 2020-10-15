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
    
      <div className="background">

      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">

            <div>
              <a href="https://www.facebook.com/tennisinc/" className="fa fa-facebook fa-fw" target="_blank"></a>
              <a href="https://twitter.com/TennisInc" className="fa fa-twitter fa-fw" target="_blank"></a>
              <a href="http://soundcloud.com/tennisinc" className="fa fa-soundcloud fa-fw" target="_blank"></a>
              <a href="https://www.instagram.com/tennisinc/" className="fa fa-instagram fa-fw" target="_blank"></a>
              <a href="https://www.youtube.com/channel/UCVOdVSbZ_U2YblectplZgyw" className="fa fa-youtube fa-fw" target="_blank"></a>
              <a href="https://open.spotify.com/artist/1ybAN3utgdoUL1MUCtH4QM" className="fa fa-spotify fa-fw" target="_blank"></a>
            </div>
            
            <button className="navbar-toggler navbar-light dropdown" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-item nav-link navigationtext" to="/">Products <span className="sr-only">(current)</span></Link>
                  <Link className="nav-item nav-link navigationtext" to="/contact">Contact Us</Link>

                  {userInfo ? 
                    (<Link className="nav-item nav-link navigationtext" to="/profile">{userInfo.name}</Link>) : (<Link className="nav-item nav-link navigationtext" to="/signin">Sign In</Link>)
                  } 

                  {userInfo && userInfo.isAdmin && 
                      (<Link className="nav-item nav-link navigationtext" to="/orders">View Customer Orders</Link>)
                  }

                  {userInfo && userInfo.isAdmin && 
                      (<Link className="nav-item nav-link navigationtext" to="/products">Edit Products</Link>)}  

                  
                </div>
              </div>
        </div>
    </nav>
      
  
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

      <footer className="py-5 fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright © The Peachy Pooch 2020</p>
        </div>
      </footer>
    </div>
</BrowserRouter>
  
  );
}

export default App;
