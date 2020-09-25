import React from "react";
import productdata from '../data.js';

function HomeScreen(props) {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide my-4"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              className="d-block img-fluid rounded"
              src="/images/DSCF4107.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-fluid rounded"
              src="/images/DSCF4106.jpg"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block img-fluid rounded"
              src="/images/DSCF4111.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="row">

{
    productdata.products.map(product =>
    <div className="col-lg-4 col-md-6 mb-4">
    <div className="card h-100">
        <a href="shopitem.html"><img className="card-img-top" src={product.image} alt="" /></a>
        <div className="card-body">
        <h4 className="card-title">
            <a href="shopitem.html">{product.name}</a>
        </h4>
        <h5>{product.price}</h5>
        <p className="card-text">{product.description}</p>
        </div>
        <div className="card-footer">
        <small className="text-muted">{product.rating}</small>
        </div>
    </div>
    </div>
    )
}

</div>
    </>
  );
}
export default HomeScreen;
