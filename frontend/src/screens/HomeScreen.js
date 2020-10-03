import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

function HomeScreen(props) {

  // Define a Hook:
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () =>{
      const {data} =await axios.get("/api/products");
      setProduct(data);
    }
    fetchData();
    return () => {
      //
    };
  }, [])

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
    products.map(product =>
    <div className="col-lg-4 col-md-6 mb-4">
    <div className="card h-100">
        <Link to={'/product/' + product._id}>
          <img className="card-img-top" src={product.image} alt="" />
        </Link>
        <div className="card-body">
        <h4 className="card-title">
            <Link to={'/product/' + product._id}>{product.name}</Link>
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
