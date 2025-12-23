import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext.jsx";
function Navbar() {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  console.log(cart);
  return (
    <header className="border-bottom sticky-top bg-white">
      <nav className="navbar navbar-expand-lg container py-3">
        <Link className="navbar-brand fw-bold text-uppercase" to="/">
          Derma Lane
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#primaryNav"
          aria-controls="primaryNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="primaryNav">
          <form
            className="ms-lg-5 my-3 my-lg-0 flex-grow-1"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                placeholder="Search products, concerns, or ingredients"
              />
              <button className="btn btn-dark" type="submit">
                Search
              </button>
            </div>
          </form>
          <ul className="navbar-nav ms-lg-4 align-items-lg-center">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-semibold" : "nav-link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-semibold" : "nav-link"
                }
                to="/products"
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-semibold position-relative" : "nav-link position-relative"
                }
                to="/cart"
              >
                Cart
                {cartCount > 0 && (
                  <span className="badge bg-dark ms-1 position-absolute top-5 start-100 translate-middle badge rounded-pill">{cartCount}</span>
                )}
              </NavLink>
            </li>
            <li className="nav-item ms-3">
              <NavLink className="btn btn-outline-dark ms-lg-2" to="/checkout">
                Checkout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
