import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";
function Checkout() {
  const navigate = useNavigate();
  const { cart, clearCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [error, setError] = useState("");
  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (cart.length === 0) {
      setError("Your cart is empty");
      return;
    }

    for (let key in form) {
      if (!form[key]) {
        setError("Please fill all fields");
        return;
      }
    }

    if (!form.email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    setError("");
    alert("Order placed successfully!");
    clearCart();
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    });
    navigate("/");
  }

  return (
    <main className="py-5 bg-light min-vh-100">
      <div className="container">
        <div className="row g-4">
          <form onSubmit={handleSubmit} className="row g-4">
            <div className="col-lg-8">
              <div className="bg-white rounded-4 shadow-sm p-4">
                <h1 className="h4 mb-4">Checkout</h1>
                {error && <p className="text-danger mb-3">{error}</p>}

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">First name</label>
                    <input
                      name="firstName"
                      className="form-control"
                      value={form.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Last name</label>
                    <input
                      name="lastName"
                      className="form-control"
                      value={form.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label">Shipping address</label>
                    <input
                      name="address"
                      className="form-control"
                      value={form.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">City</label>
                    <input
                      name="city"
                      className="form-control"
                      value={form.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">State / province</label>
                    <input
                      name="state"
                      className="form-control"
                      value={form.state}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-2">
                    <label className="form-label">ZIP</label>
                    <input
                      name="zip"
                      className="form-control"
                      value={form.zip}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg-white rounded-4 shadow-sm p-4">
                <h2 className="h5">Order summary</h2>
                <div className="d-flex justify-content-between mt-3">
                  <span>Subtotal</span>
                  <strong>₹{total}</strong>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <span>Shipping</span>
                  <span className="text-muted">Calculated at checkout</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <strong>₹{total}</strong>
                </div>
                <button type="submit" className="btn btn-dark w-100 mt-3">
                  Place order
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
