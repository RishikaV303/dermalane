import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext.jsx";
function Cart() {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);
  const Subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <main className="py-5 bg-light min-vh-100">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="bg-white rounded-4 shadow-sm p-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="h4 mb-0">Shopping Cart</h1>
                <Link
                  to="/products"
                  className="text-decoration-none text-secondary"
                >
                  Continue shopping
                </Link>
              </div>

              <div className="table-responsive">
                <table className="table align-middle">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col" className="text-center">
                        Category
                      </th>
                      <th scope="col" style={{ width: "140px" }}>
                        Quantity
                      </th>
                      <th scope="col" className="text-end">
                        Price
                      </th>
                      <th scope="col" className="text-end">
                        Remove
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>
                          <div className="d-flex align-items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="rounded-3"
                              width="70"
                              height="70"
                            />
                            <div>
                              <Link
                                to={`/product/${item.id}`}
                                className="fw-semibold text-decoration-none text-dark"
                              >
                                {item.name}
                              </Link>
                              <p className="text-muted small mb-0">
                                {`₹${item.price}`} x {item.quantity}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-center text-muted">{item.type}</td>
                        <td>
                          <input
                            type="number"
                            className="form-control"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              updateQuantity(item.id, Number(e.target.value))
                            }
                          />
                        </td>
                        <td className="text-end fw-bold">
                          ₹{item.price * item.quantity}
                        </td>
                        <td className="text-end fw-bold">
                          <button
                            className="btn btn-link text-danger p-0"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="d-flex flex-column flex-md-row gap-3 justify-content-between mt-4">
                <div className="flex-grow-1">
                  <label className="form-label text-muted small">
                    Gift note
                  </label>
                  <textarea
                    className="form-control"
                    rows="2"
                    placeholder="Share a sweet message for the recipient"
                  ></textarea>
                </div>
                <div className="flex-grow-1">
                  <label className="form-label text-muted small">
                    Promo code
                  </label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Dermax10"
                    />
                    <button className="btn btn-outline-dark" type="button">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="bg-white rounded-4 shadow-sm p-4">
              <h2 className="h5">Order summary</h2>
              <div className="d-flex justify-content-between mt-3">
                <span>Subtotal</span>
                <span>₹{Subtotal}</span>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span>Shipping</span>
                <span className="text-success">Free</span>
              </div>
              {/* <div className="d-flex justify-content-between mt-2">
                <span>Taxes</span>
                <span>$11.20</span>
              </div> */}
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>₹{Subtotal}</span>
              </div>
              <p className="text-muted small mt-3">
                Orders over $75 ship free and arrive within 3-5 business days
                via carbon-neutral carriers.
              </p>
              <Link to="/checkout" className="btn btn-dark w-100 mb-2">
                Proceed to checkout
              </Link>
              <Link to="/products" className="btn btn-outline-dark w-100">
                Continue shopping
              </Link>
            </div>

            <div className="bg-white rounded-4 shadow-sm p-4 mt-4">
              <h3 className="h6 text-uppercase text-muted">Need help?</h3>
              <p className="mb-1">
                Text us at <strong>(415) 555-0198</strong>
              </p>
              <p className="mb-0">
                Email{" "}
                <Link to="mailto:support@lustreluxe.com">
                  support@dermalane.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
