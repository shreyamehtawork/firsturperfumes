import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Brands from "./pages/Brands";
import Guide from "./pages/Guide";
import Outfits from "./pages/Outfits";
import Perfumes from "./pages/Perfumes";
import Shop from "./pages/Shop";
// import Termsandconditions from "./pages/TermsAndConditions";
import Termsandconditions from "./pages/TermsAndConditions";
import Allperfumes from "./pages/Allperfumes";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/brands" element={<Brands />} />
        <Route exact path="/guide" element={<Guide />} />
        <Route exact path="/outfits" element={<Outfits />} />
        <Route exact path="/perfumes" element={<Perfumes />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route
          exact
          path="/firstur/termsandconditions"
          element={<Termsandconditions />}
        />
        <Route exact path="/allperfumes" element={<Allperfumes />} />
      </Routes>
    </div>
  );
}

export default App;
