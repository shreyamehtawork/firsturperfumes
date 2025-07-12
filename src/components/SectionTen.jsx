import React from "react";
import image4 from "../assets/perfume4.png";

function SectionTen() {
  return (
    <div className="container">
      <div className="row pe-lg-0 pt-lg-5 mt-5 align-items-center text-center ">
        <div className="col-lg-12 p-lg-5 pt-lg-3">
          <span className="tagline">
            Buy Popular colognes on <br></br> Sale at a discount
          </span>
          <span className="heading text-body-emphasis">
            World Class Fragnance
            <img src={image4} className="image4" alt="perfume" width="10px" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SectionTen;
