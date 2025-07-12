import React from "react";
import { motion } from "framer-motion";
import "../styling/SixthSection.css";
import image3 from "../assets/perfume3.png";

function SixthSection() {
  
  return (
    <div className="container-fluid py-5 section6">
      <motion.div
        className="py-5"
        initial="rest"
        animate="rest"
        whileHover="hover"
      >
        <div className="row align-items-center">
          <motion.div
            className="col-md-6 text-center position-relative"
            variants={{
              rest: { opacity: 1, x: 0 },
              hover: {
                opacity: 1,
                x: -30,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <div className="position-relative d-inline-block">
              <div
                style={{
                  border: "2px dashed #ccc",
                  borderRadius: "200px",
                  height: "380px",
                  width: "230px",
                  rotate: "28deg",
                  position: "absolute",
                  top: "45%",
                  left: "35%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 0,
                }}
              ></div>
              <div
                style={{
                  border: "2px dashed #ccc",
                  borderRadius: "200px",
                  height: "380px",
                  width: "230px",
                  rotate: "332deg",
                  position: "absolute",
                  top: "45%",
                  right: "35%",
                  transform: "translate(50%, -50%)",
                  zIndex: 0,
                }}
              ></div>
              <div
                style={{
                  border: "2px dashed #ccc",
                  borderRadius: "200px",
                  height: "380px",
                  width: "230px",
                  rotate: "90deg",
                  position: "absolute",
                  top: "40%",
                  right: "55%",
                  transform: "translate(-25%, -35%)",
                  zIndex: 0,
                }}
              ></div>
              <img
                src={image3}
                className="img-fluid image3"
                style={{ maxWidth: "250px", zIndex: 1, position: "relative" }}
                alt="Perfume"
              />
            </div>
          </motion.div>

          <motion.div
            className="col-md-6 text-md-start text-center mt-5 mt-md-0"
            variants={{
              rest: { opacity: 1, x: 0 },
              hover: {
                opacity: 1,
                x: 30,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <h2 style={{ fontSize: "3rem", fontFamily: "BonVoyage" }}>
              Get 15% Off In <br /> Seasonal Products
            </h2>
            <p className="mt-3 fs-3" style={{ fontFamily: "BonVoyage" }}>
              Oz Body Lotion <span className="text-muted">(Unboxed)</span>
            </p>
            <p className="fw-bold">
              Item #448032 <span className="text-warning">(In Stock)</span>
            </p>
            <p className="text-muted" style={{ maxWidth: "400px" }}>
              Why are they unboxed? Sometimes boxes can be damaged in transit,
              torn, or in less than perfect condition. We can buy these items
              cheaper than the boxed versions and we pass.
            </p>
            <a href="#" className="btn btn-outline-dark mt-2">
              BUY NOW →
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default SixthSection;
