import React from "react";

function ProductScreen(props) {
  return (
    <div>
      {/* Page Content */}
      <main className="container p-2 my-4">
        <div className="row">
          {/* /.col-lg-3 */}
          <div className="col-lg-9">
            <div className="card mt-4">
              <img
                className="card-img-top img-fluid"
                src="/images/DSCF4126.jpg"
                alt=""
              />
              <div className="card-body">
                <h3 className="card-title">Product Name</h3>
                <h4>$24.99</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta.
                  Totam id dolores, sint aperiam sequi pariatur praesentium
                  animi perspiciatis molestias iure, ducimus!
                </p>
                <span className="text-warning">★ ★ ★ ★ ☆</span>
                4.0 stars
              </div>
            </div>
            {/* /.card */}
            <div className="card card-outline-secondary my-4">
              <div className="card-header">Product Reviews</div>
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis et enim aperiam inventore, similique necessitatibus
                  neque non! Doloribus, modi sapiente laboriosam aperiam fugiat
                  laborum. Sequi mollitia, necessitatibus quae sint natus.
                </p>
                <small className="text-muted">
                  Posted by Anonymous on 3/1/17
                </small>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis et enim aperiam inventore, similique necessitatibus
                  neque non! Doloribus, modi sapiente laboriosam aperiam fugiat
                  laborum. Sequi mollitia, necessitatibus quae sint natus.
                </p>
                <small className="text-muted">
                  Posted by Anonymous on 3/1/17
                </small>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis et enim aperiam inventore, similique necessitatibus
                  neque non! Doloribus, modi sapiente laboriosam aperiam fugiat
                  laborum. Sequi mollitia, necessitatibus quae sint natus.
                </p>
                <small className="text-muted">
                  Posted by Anonymous on 3/1/17
                </small>
                <hr />
                <a href="#" className="btn btn-success">
                  Leave a Review
                </a>
              </div>
            </div>
            {/* /.card */}
          </div>
          {/* /.col-lg-9 */}
        </div>
      </main>
    </div>
  );
}
export default ProductScreen;
