import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-light border-top py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="fw-bold text-uppercase">Derma Lane</h5>
            <p>
              High-performance skin and hair care essentials inspired by
              wellness rituals and backed by dermatology.
            </p>
            <div className="d-flex gap-3">
              <Link to="#" className="text-secondary">
                Instagram
              </Link>
              <Link to="#" className="text-secondary">
                Pinterest
              </Link>
              <Link to="#" className="text-secondary">
                YouTube
              </Link>
            </div>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase text-muted small">Shop</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/products#skincare" className="text-secondary">
                  Skincare
                </Link>
              </li>
              <li>
                <Link to="/products#haircare" className="text-secondary">
                  Haircare
                </Link>
              </li>
              <li>
                <Link to="/products#hydration" className="text-secondary">
                  Hydration
                </Link>
              </li>
              <li>
                <Link to="/products#strength" className="text-secondary">
                  Strength
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="text-uppercase text-muted small">Support</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/Cart" className="text-secondary">
                  Your Cart
                </Link>
              </li>
              <li>
                <Link to="/Checkout" className="text-secondary">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/Checkout" className="text-secondary">
                  Customer Care
                </Link>
              </li>
              <li>
                <Link to="/Checkout" className="text-secondary">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h6 className="text-uppercase text-muted small">Stay in touch</h6>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-dark" type="submit">
                  Join
                </button>
              </div>
              <small className="d-block mt-2 text-muted">
                Receive weekly rituals, launch previews, and exclusive offers.
              </small>
            </form>
          </div>
        </div>
        <div className="border-top mt-4 pt-3 d-flex flex-column flex-md-row justify-content-between text-muted small">
          <p className="mb-0">&copy; 2025 Derma Lane Beauty Co.</p>
          <div className="d-flex gap-3">
            <Link to="#" className="text-muted">
              Privacy
            </Link>
            <Link to="#" className="text-muted">
              Terms
            </Link>
            <Link to="mailto:support@dermalane.com" className="text-muted">
              support@dermalane.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;