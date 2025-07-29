import React from "react";
import Company from "../block/company/Company";
import Career from "../block/career/Career";
import Features from "../block/features/Features";
import About from "../block/about/About";

const Navs = () => {
  return (
    <div>
      <Features />
      <Company />
      <Career />
      <About />
    </div>
  );
};

export default Navs;
