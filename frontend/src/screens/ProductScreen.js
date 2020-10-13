import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct, saveProductReview } from '../actions/productActions';
import Rating from '../components/Rating';
import { PRODUCT_REVIEW_SAVE_RESET } from '../constants/productConstants';


function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const productReviewSave = useSelector((state) => state.productReviewSave);
  const { success: productSaveSuccess } = productReviewSave;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productSaveSuccess) {
      alert('Review submitted successfully.');
      setRating(0);
      setComment('');
      dispatch({ type: PRODUCT_REVIEW_SAVE_RESET });
    }
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, [productSaveSuccess]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch actions
    dispatch(
      saveProductReview(props.match.params.id, {
        name: userInfo.name,
        rating: rating,
        comment: comment,
      })
    );
  };
  const handleAddToCart = () => {
    props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
  };


  return (
    <div>
      {/* Page Content */}
      <main className="container p-2 my-4">
        <Link to="/">Back to Result</Link>
        {loading? <div>Loading...</div>:
        error? <div>{error}</div>:
          (
            <>
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
              <div className="content-margined row">
                  <h2>Reviews</h2>
                  {!product.reviews.length && <div>There are no reviews for this product.</div>}
                        <ul className="review" id="reviews">
                          {product.reviews.map((review) => (
                            <li key={review._id}>
                              <div>{review.name}</div>
                              <div>
                                <Rating value={review.rating}></Rating>
                              </div>
                              <div>{review.createdAt.substring(0, 10)}</div>
                              <div>{review.comment}</div>
                            </li>
                          ))}
                          <li>
                            <h3>Write a customer review</h3>
                            {userInfo ? (
                              <form onSubmit={submitHandler}>
                                <ul className="form-container">
                                  <li>
                                    <label htmlFor="rating">Rating</label>
                                    <select
                                      name="rating"
                                      id="rating"
                                      value={rating}
                                      onChange={(e) => setRating(e.target.value)}
                                    >
                                      <option value="1">1- Poor</option>
                                      <option value="2">2- Fair</option>
                                      <option value="3">3- Good</option>
                                      <option value="4">4- Very Good</option>
                                      <option value="5">5- Excelent</option>
                                    </select>
                                  </li>
                                  <li>
                                    <label htmlFor="comment">Comment</label>
                                    <textarea
                                      name="comment"
                                      value={comment}
                                      onChange={(e) => setComment(e.target.value)}
                                    ></textarea>
                                  </li>
                                  <li>
                                    <button type="submit" className="button primary">
                                      Submit
                                    </button>
                                  </li>
                                </ul>
                              </form>
                            ) : (
                              <div>
                                Please <Link to="/signin">Sign-in</Link> to write a review.
                              </div>
                            )}
                          </li>
                        </ul>
              </div>
          </>
          )
        }

      </main>
    </div>
  );
}
export default ProductScreen;
