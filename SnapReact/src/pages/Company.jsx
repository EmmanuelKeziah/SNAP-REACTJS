import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Company = () => {
  // State to manage dropdowns and mobile menu

  const [company, setCompany] = useState(false);

  return (
    <div
      className=" relative flex items-center hover:text-[#141414] transition-colors duration-200 cursor-pointer "
      onMouseEnter={() => setCompany(true)}
      onMouseLeave={() => setCompany(false)}
    >
      {/* Dropdown for Desktop Company */}
      <span>Company</span>
      {company ? (
        <RiArrowDropUpLine size={24} />
      ) : (
        <RiArrowDropDownLine size={24} />
      )}
      {company && (
        <div className="absolute top-8 left-0 bg-white shadow-md rounded-md p-4 text-sm  space-y-3">
          <div>History</div>
          <div>Our Team</div>
          <div>Blog</div>
        </div>
      )}
    </div>
  );
};

export default Company;
