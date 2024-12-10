import React from 'react';
import { Link } from 'react-router-dom';
import "./Order.css"
const SuccessPage = () => {
  return (
    <div className="success-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="success-message">
              <div className="check-circle">
                &#10004;
              </div>
              <h1>Order Successful!</h1>
              <p>Thank you for your order. We will deliver your pizza soon.</p>
              <Link to="/" className="btn btn-primary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;