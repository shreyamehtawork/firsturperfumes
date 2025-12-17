import React from "react";
import { motion } from "motion/react";
import "../styling/Footer.css";

function SectionNine() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-section bg-black text-white py-5 px-3">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="footer-heading text-center mb-5">Get In Touch</h2>

        <div className="row text-center text-md-start">
          <motion.div
            className="col-lg-3 col-md-6 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h5 className="footer-title">Address</h5>
            <hr className="footer-line" />
            <p className="footer-info">
              111/112, Burj Khalifa,
              <br />
              MH, India
            </p>
          </motion.div>

          <motion.div
            className="col-lg-3 col-md-6 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h5 className="footer-title">Telephone</h5>
            <hr className="footer-line" />
            <p>
              <a
                href="tel:+123456789"
                className="footer-link text-white footer-info"
              >
                +123456789
              </a>
              <br />
              <br />
              <a
                href="tel:+123456789"
                className="footer-link text-white footer-info"
              >
                +123456789
              </a>
            </p>
          </motion.div>

          <motion.div
            className="col-lg-3 col-md-6 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h5 className="footer-title">Email</h5>
            <hr className="footer-line" />
            <p>
              <a
                href="mailto:Info@Firstur.Com"
                className="footer-link text-white footer-info"
              >
                Info@Firstur.Com
              </a>
              <br />
              <br />
              <a
                href="mailto:Support@Firstur.Com"
                className="footer-link text-white footer-info"
              >
                Support@Firstur.Com
              </a>
            </p>
          </motion.div>

          <motion.div
            className="col-lg-3 col-md-6 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h5 className="footer-title">Follow Us</h5>
            <hr className="footer-line footer-info" />
            <p>
              Instagram
              <br />
              LinkedIn
            </p>
          </motion.div>
        </div>

        <hr className="mt-4 text-secondary" />

        <motion.div
          className="d-flex flex-column flex-md-row justify-content-between align-items-center pt-3 small-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="/firstur/termsandconditions"
            className="mb-1 text-white"
            style={{ textDecoration: "none" }}
          >
            Terms & Conditions
          </a>
          <p className="mb-1">Copyright © {year} Firstur</p>
          <select className="mb-1 btn btn-outline-light btn-sm footer-info">
            <option disabled selected>
              Language
            </option>
            <option>English</option>
            <option>Hindi</option>
            <option>German</option>
            <option>French</option>
          </select>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default SectionNine;
