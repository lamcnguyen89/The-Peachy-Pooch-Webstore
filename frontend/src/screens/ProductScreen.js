import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {detailsProduct} from '../actions/productActions';

function ProductScreen(props) {

  const [qty, setQty] = useState(1)
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const  handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty )
  }

  return (
    <div>
      {/* Page Content */}
      <main className="container p-2 my-4">
        <Link to="/">Back to Result</Link>
        {loading? <div>Loading...</div>:
        error? <div>{error}</div>:
          (
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
                      Status:{' '}
                      {product.countInStock > 0 ? 'In Stock' : 'Unavailable.'}
                    </li>
                    <li>
                      Qty: <select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                        {[...Array(product.countInStock).keys()].map(x=>
                          <option key={x+1}  value={x + 1}>{x + 1}</option>
                          )}
                      </select>
                    </li>
                    <li>
                    {product.countInStock > 0 && (
                        <button
                          onClick={handleAddToCart}
                          className="button primary"
                        >
                          Add to Cart
                        </button>
                    )}
                    </li>
                  </ul>
                </div>
              </div>
              {/* /.card */}
  
              {/* /.card */}
            </div>
            {/* /.col-lg-9 */}
          </div>
          )
        }

      </main>
    </div>
  );
}
export default ProductScreen;
