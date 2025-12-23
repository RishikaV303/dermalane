import React from "react";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { Link } from "react-router-dom";
function Products() {
  return (
    <main className="py-5 bg-light min-vh-100">
      <div className="container">
        <div className="bg-white rounded-4 p-4 p-lg-5 shadow-sm mb-5">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6">
              <p className="text-uppercase text-muted small fw-semibold mb-1">
                shop all
              </p>
              <h1 className="fw-bold display-6">
                Skin & hair care, curated for real routines
              </h1>
              <p className="mb-0">
                Filter by concern, ingredient, or ritual to find products that
                complement your existing lineup. Every product pairs with our
                dermatologist hotline for free.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label text-muted small text-uppercase">
                    Category
                  </label>
                  <select className="form-select">
                    <option>All categories</option>
                    <option value="skincare">Skincare</option>
                    <option value="haircare">Haircare</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted small text-uppercase">
                    Concern
                  </label>
                  <select className="form-select">
                    <option>All concerns</option>
                    <option>Hydration</option>
                    <option>Clarifying</option>
                    <option>Damage Repair</option>
                    <option>Curl Definition</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted small text-uppercase">
                    Ingredients
                  </label>
                  <select className="form-select">
                    <option>Any ingredient</option>
                    <option>Vitamin C</option>
                    <option>Niacinamide</option>
                    <option>Peptides</option>
                    <option>Rice Protein</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label text-muted small text-uppercase">
                    Sort by
                  </label>
                  <select className="form-select">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                    <option>Top Rated</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4" id="skincare">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="h4 mb-0">Skincare Essentials</h2>
              {/* <span className="text-muted small">Showing 4 products</span> */}
            </div>
          </div>
          {/* products */}
          {products
            .filter((product) => product.type === "skincare")
            .map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                productname={product.name}
                productDescription={product.description}
                price={product.price}
                producttype={product.category}
                productcategory={product.type}
                image={product.image}
              />
            ))
          }
        </div>

        <div className="row g-4 mt-5" id="haircare">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="h4 mb-0">Haircare Staples</h2>
              {/* <span className="text-muted small">Showing 4 products</span> */}
            </div>
          </div>
          {/* products */}
          {products
            .filter((product) => product.type === "haircare")
            .map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                productname={product.name}
                productDescription={product.description}
                price={product.price}
                producttype={product.category}
                productcategory={product.type}
                image={product.image}
              />
            ))
          }
        </div>
      </div>
    </main>
  );
}

export default Products;
