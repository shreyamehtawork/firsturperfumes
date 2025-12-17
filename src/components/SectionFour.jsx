import React, { useState } from "react";
import { motion } from "motion/react";
import image4 from "../assets/perfume4.png";
import image5 from "../assets/perfume5.png";
import image2 from "../assets/perfume2.png";
import "../styling/SectionFour.css";

function SectionFour() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="container-fluid text-white py-5 section-four-wrapper"
      style={{ backgroundColor: "#000" }}
    >
      <motion.div
        className="container"
        onHoverStart={() => setIsHovered(true)}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={isHovered ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <h2 className="mb-5" style={{ fontFamily: "BonVoyage" }}>
          A Truly Timeless Eau De Parfum Became <br />
          One Of The Most Beloved Perfumes.
        </h2>

        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-4 mb-4">
            <img
              src={image4}
              alt="Perfume 1"
              className="img-fluid section4img"
              style={{ maxWidth: "250px" }}
            />
          </div>
          <div className="col-md-4 mb-4 text-start">
            <h3 style={{ fontFamily: "BonVoyage" }}>Eau De Parfum Spray</h3>
            <p className="small lh-2" style={{ width: "350px" }}>
              Eternity perfume by Calvin Klein introduces the wearer to the
              fresh and warm notes of a clean, white floral scent with hints of
              vibrant green fruits, a touch of amber, and a dash of inviting
              spice.
            </p>
            <a href="#" className="btn btn-outline-light btn-sm">
              BUY NOW →
            </a>
          </div>
          <div className="col-md-4 mb-4">
            <img
              src={image2}
              alt="Perfume 2"
              className="img-fluid section4img"
              style={{ maxWidth: "250px" }}
            />
          </div>
        </div>

        <div className="row justify-content-center align-items-center text-center">
          <div className="col-md-2 mb-4">
            <div
              className="d-flex align-items-center justify-content-center mx-auto"
              style={{ width: "100px", height: "100px" }}
            >
              <button
                className="btn btn-outline-light btn-sm"
                style={{ borderRadius: "200px", padding: "30px" }}
              >
                Explore
              </button>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <img
              src={image5}
              alt="Perfume 5"
              className="img-fluid section4img"
              style={{ maxWidth: "280px" }}
            />
          </div>
          <div className="col-md-6 mb-4 text-md-start text-center">
            <h3 style={{ fontFamily: "BonVoyage" }}>Lotion Parfum Spray</h3>
            <p className="small" style={{ width: "350px" }}>
              Why are they unboxed? Sometimes boxes can be damaged in transit,
              torn, or in less than perfect condition. We can buy these items
              cheaper than the boxed versions.
            </p>
            <a href="#" className="btn btn-outline-light btn-sm">
              BUY NOW →
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SectionFour;
