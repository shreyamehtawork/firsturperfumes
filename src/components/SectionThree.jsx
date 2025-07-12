import React from "react";
import "../styling/SectionThree.css";
import image5 from "../assets/perfume5.png";
import { motion } from "framer-motion";

function SectionThree() {
  return (
    <div className="container">
      <h1 className="display-1 section3heading text-center">
        More Details for You
      </h1>

      <motion.div
        className="row mb-3 mt-4 text-center"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        <motion.div
          className="col-md-6 diagram"
          variants={{
            rest: { opacity: 1, x: 0 },
            hover: {
              opacity: 1,
              x: -30,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <div className="flavour-container">
            <div className="outer-circle">
              <div className="inner-circle"></div>
            </div>
            <div className="line line-top"></div>
            <div className="line line-right"></div>
            <div className="line line-bottom"></div>
            <div className="line line-left"></div>

            <div className="center-circle">
              Top Note
              <br />
              Flavours
            </div>

            <div className="flavour flavour-top">Mandarin</div>
            <div className="flavour flavour-right">Citruses</div>
            <div className="flavour flavour-bottom">Orange</div>
            <div className="flavour flavour-left">Freesia</div>
          </div>
        </motion.div>

        <motion.div
          className="col-md-6 about text-center"
          variants={{
            rest: { opacity: 1, x: 0 },
            hover: {
              opacity: 1,
              x: 30,
              transition: { duration: 0.6, ease: "easeOut" },
            },
          }}
        >
          <h2 className="mb-4 aboutfragrance">About Fragrance</h2>
          <img src={image5} alt="perfume" className="image5" />
          <p className="details container">
            A pioneer of designer jeans and wholesome, all American look,
            Calvien Klein is one of the fashion world's biggest names and
            brands. Born in 1942, Calvien Klein taught himself how to sketch and
            sew as a boy and went on to launch his own label.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SectionThree;
