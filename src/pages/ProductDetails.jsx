import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import CartContext from "../context/CartContext.jsx";
function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find((prod) => prod.id === Number(id));
  if (!product) {
    return (
      <main className="py-5 bg-light min-vh-100">
        <div className="container">
          <h2 className="fw-bold">Product not found</h2>
        </div>
      </main>
    );
  }
  return (
    <main className="py-5 bg-light min-vh-100">
      <div className="container">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/products">Products</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>

        <div className="row g-5">
          <div className="col-lg-6">
            <div className="ratio ratio-4x3 rounded-4 overflow-hidden shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="row g-3 mt-2">
              {product.additionalImages.map((imgUrl, index) => (
                <div key={index} className="col-4">
                  <img
                    src={imgUrl}
                    alt="images"
                    className="img-fluid rounded-3"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6">
            <span className="badge bg-dark-subtle text-dark mb-2 text-uppercase">
              {product.category}
            </span>
            <h1 className="fw-bold">{product.name}</h1>
            <p className="lead text-muted">{product.description}</p>
            <div className="d-flex align-items-center gap-3 mb-3">
              <p className="h3 fw-bold mb-0">₹{product.price}</p>
              <span className="text-warning">★★★★★</span>
              <small className="text-muted">176 reviews</small>
            </div>
            <p>{product.longDescription}</p>
            <ul>
              {product.points.map((point, index) => (
                <li key={index} className="mb-2">
                  {point}
                </li>
              ))}
            </ul>
            <div className="d-flex flex-wrap gap-3 mt-4">
              <button
                className="btn btn-dark"
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>
              <Link className="btn btn-outline-dark btn-lg px-4" to="/products">
                Back to shop
              </Link>
            </div>
            <p className="text-muted small mt-3">{product.tagnames}</p>
          </div>
        </div>

        <div className="row g-4 mt-5">
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="h5">Application</h3>
                <ol className="ps-3 mt-3">
                  {product.application.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="h5">Ingredient highlights</h3>
                <ul className="list-unstyled mt-3">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="mb-2">
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-5">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="h5">Stylist pairing</h3>
              <p className="mb-0">{product.stylistNote}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProductDetails;
