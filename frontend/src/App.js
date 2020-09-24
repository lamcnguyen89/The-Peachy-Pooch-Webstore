import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
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
        {/* /.col-lg-3 */}
        <div className="col-lg-9">
          <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img className="d-block img-fluid rounded" src="/images/DSCF4107.jpg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid rounded" src="/images/DSCF4106.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block img-fluid rounded" src="/images/DSCF4111.jpg" alt="Third slide" /> 
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="shopitem.html"><img className="card-img-top" src="/images/DSCF4126.jpg" alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="shopitem.html">Berry Butter Beauty</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">★ ★ ★ ★ ☆</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="shopitem.html"><img className="card-img-top" src="/images/DSCF4126.jpg" alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="shopitem.html">Berry Butter Beauty</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">★ ★ ★ ★ ☆</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="shopitem.html"><img className="card-img-top" src="/images/DSCF4126.jpg" alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="shopitem.html">Berry Butter Beauty</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">★ ★ ★ ★ ☆</small>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <a href="shopitem.html"><img className="card-img-top" src="/images/DSCF4126.jpg" alt="" /></a>
                <div className="card-body">
                  <h4 className="card-title">
                    <a href="shopitem.html">Berry Butter Beauty</a>
                  </h4>
                  <h5>$24.99</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">★ ★ ★ ★ ☆</small>
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.col-lg-9 */}
      </div>
      {/* /.row */}
    </main>
    {/* /.container */}
    {/* Footer */}
    <footer className="py-5 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">Copyright © Your Website 2020</p>
      </div>
      {/* /.container */}
    </footer>
  </div>
  
  );
}

export default App;
