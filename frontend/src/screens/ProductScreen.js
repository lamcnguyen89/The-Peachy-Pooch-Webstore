import React, { useEffect } from "react";
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {detailsProduct} from '../actions/productActions';

function ProductScreen(props) {

  // console.log(props.match.params.id);
  // const product = data.products.find(x => x._id === props.match.params.id)
  const productDetails = useSelector(state => state.productDetails);
  const {product, loading, error} = productDetails
;  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(detailsProduct());
    return () => {
      //
    };
  }, []);

  return (
    <div>
      {/* Page Content */}
      <main className="container p-2 my-4">
        <Link to="/">Back to Result</Link>
        <div className="row">
          {/* /.col-lg-3 */}
          <div className="col-lg-9">
            <div className="card mt-4">
              <img
                className="card-img-top img-fluid"
                src={product.image}
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title">{product.name}</h3>
                <h4>{product.price}</h4>
                <p className="card-text">
                  {product.description}
                </p>
                <span className="text-warning">Stars {product.rating}</span>
                
              </div>
            </div>
            <div className="col-lg-3">
              <div className="details-action m-2">
                <ul>
                  <li>
                    Status: {product.status}
                  </li>
                  <li>
                    Qty: <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </select>
                  </li>
                  <li>
                    <button>Add to Cart</button>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.card */}

            {/* /.card */}
          </div>
          {/* /.col-lg-9 */}
        </div>
      </main>
    </div>
  );
}
export default ProductScreen;
