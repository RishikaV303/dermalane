import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
function Home() {
  return (
    <main>
      <section className="hero-section text-white text-center text-lg-start ">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="text-uppercase fw-semibold tracking-wide mb-2">
                conscious self-care
              </p>
              <h1 className="display-4 fw-bold">
                Skin & hair rituals that deliver clinical results
              </h1>
              <p className="lead mt-3">
                Discover dermatologist-formulated essentials powered by
                botanicals, powered for everyday glow.
              </p>
              <div className="mt-4 d-flex flex-column flex-sm-row gap-3">
                <Link className="btn btn-light btn-lg px-4" to="/products">
                  Shop Collections
                </Link>
                <Link
                  className="btn btn-outline-light btn-lg px-4"
                  to="#"
                >
                  Browse Categories
                </Link>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 mt-5 mt-lg-0">
              <div className="card shadow-lg hero-card">
                <img
                  src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=900&q=60"
                  className="card-img-top"
                  alt="Skin care product flatlay"
                />
                <div className="card-body">
                  <h5 className="card-title mb-2">
                    New: Midnight Repair Ritual
                  </h5>
                  <p className="card-text">
                    Rebuild barrier strength overnight with peptides, ceramides,
                    and cold-pressed oils designed for sensitive skin types.
                  </p>
                  <Link to="/product/ID" className="btn btn-dark w-100">
                    View Collection
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light" id="categories">
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
            <div>
              <p className="text-uppercase text-muted fw-semibold mb-1">
                Shop by concern
              </p>
              <h2 className="fw-bold">Skincare & Haircare Categories</h2>
            </div>
            <Link className="btn btn-outline-dark mt-3 mt-md-0" to="/products">
              Explore all products
            </Link>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="category-card p-4 h-100">
                <p className="text-muted text-uppercase small mb-1">Skincare</p>
                <h5>Hydration Boost</h5>
                <p>
                  Lightweight moisturizers and toners to plump and lock in
                  moisture.
                </p>
                <Link to="/products#hydration" className="stretched-link">
                  Shop hydration
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="category-card p-4 h-100">
                <p className="text-muted text-uppercase small mb-1">Skincare</p>
                <h5>Clarifying Care</h5>
                <p>
                  Niacinamide, salicylic acid, and clay blends to balance oily
                  skin.
                </p>
                <Link to="/products#clarifying" className="stretched-link">
                  Shop clarifying
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="category-card p-4 h-100">
                <p className="text-muted text-uppercase small mb-1">Haircare</p>
                <h5>Strength Repair</h5>
                <p>
                  Bond-building shampoos, conditioners, and leave-ins for damage
                  repair.
                </p>
                <Link to="/products#strength" className="stretched-link">
                  Shop strength
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="category-card p-4 h-100">
                <p className="text-muted text-uppercase small mb-1">Haircare</p>
                <h5>Curl Definition</h5>
                <p>
                  Moisture-rich stylers that define curls without crunch or
                  frizz.
                </p>
                <Link to="/products#curl" className="stretched-link">
                  Shop curl care
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4">
            <div>
              <p className="text-uppercase text-muted fw-semibold mb-1">
                Bestsellers
              </p>
              <h2 className="fw-bold">
                Featured products loved by dermatologists
              </h2>
            </div>
            <div className="btn-group mt-3 mt-md-0" role="group">
              <Link
                className="btn btn-outline-dark active"
                to="/products#skincare"
              >
                Skincare
              </Link>
              <Link className="btn btn-outline-dark" to="/products#haircare">
                Haircare
              </Link>
            </div>
          </div>
          <div className="row g-4">
           <ProductCard
            id="1"
            productname="Radiant Day Cream SPF 30"
            productDescription="Vitamin C + ceramides for dewy protection."
            price="450"
            producttype="Hydration"
            image="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=60"
          />

          <ProductCard
            id="2"
            productname="Midnight Repair Serum"
            productDescription=" Peptides + bakuchiol calm inflamed skin."
            price="630"
            producttype="Barrier Repair"
            image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=60"
          />

          <ProductCard
            id="3"
            productname="Scalp Balance Shampoo"
            productDescription=" Willow bark + mint detoxify without stripping."
            price="440"
            producttype="Balance"
            image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=60"
          />

          <ProductCard
            id="4"
            productname="Silk Strength Conditioner"
            productDescription="Bond-repair technology for shine that lasts."
            price="720"
            producttype="Repair"
            image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=60"
          />
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="fw-bold">
                Consciously crafted, clinically proven
              </h2>
              <p className="lead mt-3">
                Every Lustre Luxe formula is dermatologist-tested, cruelty-free,
                and powered by traceable botanicals that deliver visible results
                within 4 weeks.
              </p>
              <div className="row mt-4 gy-3">
                <div className="col-sm-4">
                  <p className="h1 fw-bold mb-0">96%</p>
                  <p className="text-uppercase small text-white-50">
                    saw softer skin
                  </p>
                </div>
                <div className="col-sm-4">
                  <p className="h1 fw-bold mb-0">4.8/5</p>
                  <p className="text-uppercase small text-white-50">
                    customer rating
                  </p>
                </div>
                <div className="col-sm-4">
                  <p className="h1 fw-bold mb-0">35+</p>
                  <p className="text-uppercase small text-white-50">
                    clinical studies
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 mt-4 mt-lg-0">
              <div className="card bg-transparent border-light">
                <div className="card-body text-white">
                  <h5 className="card-title">Complimentary skin coaching</h5>
                  <p className="card-text">
                    Book a 15-minute video consultation with our licensed
                    estheticians for routine checks, ingredient deep-dives, and
                    seasonal updates.
                  </p>
                  <Link to="/products" className="btn btn-light">
                    Book a session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1521165944200-133dfc0bbad5?auto=format&fit=crop&w=900&q=60"
                className="img-fluid rounded-4 shadow-lg"
                alt="Haircare products on marble table"
              />
            </div>
            <div className="col-lg-6">
              <p className="text-uppercase text-muted fw-semibold mb-1">
                Why Lustre Luxe
              </p>
              <h2 className="fw-bold">Powered by science, rooted in ritual</h2>
              <p>
                We formulate with dermatologist oversight for sensitive skin
                types, focus on multi-benefit ingredients, and design packaging
                with refill systems that cut plastic waste by 42%.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <span className="badge bg-success-subtle text-success me-2">
                    01
                  </span>
                  Transparent ingredient glossary with clinical percentages.
                </li>
                <li className="mb-3">
                  <span className="badge bg-success-subtle text-success me-2">
                    02
                  </span>
                  Inclusive ranges for dry, oily, textured, and color-treated
                  hair.
                </li>
                <li>
                  <span className="badge bg-success-subtle text-success me-2">
                    03
                  </span>
                  Free shipping over $75 and climate-neutral deliveries.
                </li>
              </ul>
              <Link to="/products" className="btn btn-dark mt-3">
                Start shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
