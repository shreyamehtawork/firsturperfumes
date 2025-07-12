import React from "react";
import Nav from "./components/Nav";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import SectionThree from "./components/SectionThree";
import SectionNine from "./components/SectionNine";
import SectionTen from "./components/SectionTen";
import SevenSection from "./components/SevenSection";
import SixthSection from "./components/SixthSection";
import SectionFive from "./components/SectionFive";
import SectionFour from "./components/SectionFour";

function Home() {
  return (
    <div className="allborder">
      <Nav />
      <FirstSection />
      <SecondSection />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SixthSection />
      <SevenSection />
      <SectionNine />
      <SectionTen />
    </div>
  );
}

export default Home;
