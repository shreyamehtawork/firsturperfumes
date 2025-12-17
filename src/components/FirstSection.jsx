import React, { memo } from "react";
import "../styling/FirstSection.css";
import { easeIn, motion } from "framer-motion";

const image1 = new URL("../assets/perfume1.png", import.meta.url).href;
const image4 = new URL("../assets/perfume4.png", import.meta.url).href;

// Smooth luxury easing
const easeLuxury = [0.22, 1, 0.36, 1];

// Animation variants
const leftVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.9,
      ease: easeIn,
    },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.8,
      ease: easeIn,
      delay: 0.15,
    },
  },
};

function FirstSection() {
  return (
    <div className="my-4 container">
      <div className="row pe-lg-0 pt-lg-5 align-items-center">
        {/* LEFT CONTENT */}
        <motion.div
          className="col-lg-8 p-lg-5 pt-lg-3 section1"
          variants={leftVariant}
          initial="hidden"
          animate="visible"
        >
          <span className="tagline">
            Buy Popular colognes on <br /> Sale at a discount
          </span>

          <span className="heading text-body-emphasis">
            World Class Fragrance
            <motion.img
              src={image4}
              className="image4"
              alt="perfume"
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 1.2,
                  ease: easeLuxury,
                  delay: 0.4,
                },
              }}
            />
          </span>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="col-lg-2 offset-lg-1 p-0 rightblock"
          variants={rightVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src={image1}
            alt="perfume"
            loading="lazy"
            decoding="async"
            width="200"
            height="300"
            whileHover={{ scale: 1.04 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 20,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export default memo(FirstSection);
