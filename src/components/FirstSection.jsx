import React from "react";
import "../styling/FirstSection.css";
import image1 from "../assets/perfume1.png";
import image4 from "../assets/perfume4.png";

function FirstSection() {
  return (
    <div className="my-4 container">
      <div className="row pe-lg-0 pt-lg-5 align-items-center ">
        <div className="col-lg-8 p-lg-5 pt-lg-3 section1">
          <span className="tagline">
            Buy Popular colognes on <br></br> Sale at a discount
          </span>
          <span className="heading text-body-emphasis">
            World Class Fragnance
            <img src={image4} className="image4" alt="perfume" />
          </span>
        </div>
        <div className="col-lg-2 offset-lg-1 p-0  rightblock">
          <img src={image1} alt="perfume" />
        </div>
      </div>
    </div>
  );
}

export default FirstSection;

//  <div>
//       <div className="p-4 bg-body-tertiary rounded-3">
//         <div className="section1">
//           <div className="leftblock">
//             <span className="tagline">
//               Buy Popular colognes on <br></br> Sale at a discount
//             </span>
//             {"  "}
//             <span className="heading">World Class Fragnance</span>
//             {"   "}
//             <span className="headingimage">
//               <img className="image4" src={image4} />
//             </span>
//           </div>
//           <div className="rightblock">
//             <img src={image1} alt="perfume" />
//           </div>
//         </div>
//       </div>
//     </div>
