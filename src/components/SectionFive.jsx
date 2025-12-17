import React, { useState } from "react";
import { motion } from "motion/react";
import image2 from "../assets/perfume2.png";
import image5 from "../assets/perfume5.png";
import "../styling/SectionFive.css";

function SectionFive() {
  const [animateIn, setAnimateIn] = useState(false);

  return (
    <div className="container px-5">
      <motion.div
        className="container py-5"
        initial={{ opacity: 0, y: 30 }}
        animate={animateIn ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, easing: "ease-in-out" }}
        onHoverStart={() => setAnimateIn(true)}
      >
        <div className="text-center mb-5 section5heading">
          <span>
            <img src={image5} alt="Icon" className="section5headingimage" />
          </span>
          <h2 className="d-inline-block section5title">
            The Fragrance Difference
          </h2>
        </div>

        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-4 mb-4 mb-md-0">
            <p className="lh-1">
              <strong>F\1</strong>
              <hr />
              <span className="features">5 Star Customer Ratings</span>
            </p>
            <br />
            <p className="lh-1">
              <strong>F\2</strong>
              <hr />
              <span className="features">Trusted Since 2001</span>
            </p>
            <br />
            <p className="lh-1">
              <strong>F\3</strong>
              <hr />
              <span className="features">Same Day Free Shipping</span>
            </p>
            <br />
            <p className="lh-1">
              <strong>F\4</strong>
              <hr />
              <span className="features">Safe & Secure Checkout</span>
            </p>
          </div>

          <div className="col-md-5 mb-4 mb-md-0 text-center">
            <img
              src={image2}
              alt="Fragrance Bottle"
              className="img-fluid centerimage"
            />
          </div>

          <div className="col-md-3 row align-items-center text-center text-md-start">
            <p>
              <span className="feature-title">Brand Name</span>
              <br />
              <span className="feature-detail">Calvin Klein</span>
            </p>
            <p>
              <span className="feature-title">Product Form</span>
              <br />
              <span className="feature-detail">Liquid</span>
            </p>
            <p>
              <span className="feature-title">Sustainable</span>
              <br />
              <span className="feature-detail">Regular</span>
            </p>
            <p>
              <span className="feature-title">Classification</span>
              <br />
              <span className="feature-detail">Eau De Parfum</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SectionFive;
