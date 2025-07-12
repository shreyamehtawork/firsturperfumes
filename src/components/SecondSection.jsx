import React from "react";
import "../styling/SecondSection.css";
import perfume1 from "../assets/perfume1.png";
import perfume2 from "../assets/perfume2.png";
import perfume3 from "../assets/perfume3.png";
import { motion } from "framer-motion";

function SecondSection() {
  return (
    <motion.div
      className="container my-5 fragrance-container"
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      style={{ opacity: 1 }} 
    >
      <div className="row gy-5 align-items-center">
        <div className="col-lg-5 text-center two-leftblock">
          <img src={perfume3} alt="Perfume 1" className="leftimage" />
          <p className="fragrance-desc mt-3">
            A fragrance is a smell, usually a pleasant or sweet smell. Often
            perfumes are called fragrances. If you like the fragrance.
          </p>
        </div>
        <div className="col-lg-6 text-center">
          <h2 className="big-heading">
            A Fragrance Is A Smell, Usually A Pleasant Or{" "}
            <img src={perfume2} alt="perfume" className="heading-img" /> Sweet
            Smell.
          </h2>

          <div className="row mt-4">
            <div className="col-12 col-md-6 mb-4 icon-box">
              <div className="icon-symbol">✽</div>
              <p>
                A fragrance is a smell, usually a pleasant or sweet smell. Often
                perfumes are called fragrances. If you like the fragrance.
              </p>
            </div>
            <div className="col-12 col-md-6 icon-box">
              <div className="icon-symbol">✽</div>
              <p>
                A fragrance is a pleasant-smelling liquid which people put on
                their bodies to make themselves smell nice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SecondSection;
