import React from "react";
import image5 from "../assets/perfume5.png";
import "../styling/SectionSeven.css";
import { motion } from "framer-motion";

function SevenSection() {
  return (
    <motion.div
      className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center mb-3 container section7"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="col-lg-8 p-3 p-lg-5 pt-lg-3"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="display-2 lh-1 text-body-emphasis section7heading">
          Subscribe Our Newsletter <br /> & Get Latest News
        </h1>
        <br />

        <div className="d-grid d-md-flex justify-content-md-start">
          <div className="container">
            <div className="email-input-wrapper d-flex align-items-start">
              <input
                type="email"
                className="form-control border-0 shadow-none email-input"
                placeholder="Enter your E-mail address"
              />
              <button className="email-arrow-btn">
                <span className="arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <hr className="email-underline" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="col-4"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true }}
      >
        <img src={image5} alt="perfume" className="section7image" />
      </motion.div>
    </motion.div>
  );
}

export default SevenSection;
