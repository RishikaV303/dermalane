import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext.jsx";
function ProductCard(props) {
  const { addToCart } = useContext(CartContext);
  const product = {
    id: props.id,
    name: props.productname,
    price: props.price,
    image: props.image,
    type: props.productcategory,
  };
  return (
    <>
      <div className="col-md-6 col-lg-4" id="strength">
        <article className="card h-100 shadow-sm">
          <img src={props.image} className="card-img-top" alt="" />
          <div className="card-body d-flex flex-column">
            <span className="badge bg-dark-subtle text-dark mb-2">
              {props.producttype}
            </span>
            <h3 className="h5">{props.productname}</h3>
            <p className="text-muted flex-grow-1">{props.productDescription}</p>
            <p className="fw-bold mb-2">₹{props.price}</p>
            <div className="d-flex gap-2">
              <Link
                to={`/product/${props.id}`}
                className="btn btn-outline-dark flex-grow-1"
              >
                View detail
              </Link>
              <button
                className="btn btn-dark"
                onClick={() => addToCart(product)}
              >
                Add
              </button>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default ProductCard;
