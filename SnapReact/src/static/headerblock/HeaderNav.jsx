import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import React, { useState } from "react";

const HeaderNav = () => {
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);

  return (
    <main className="flex gap-4 justify-between items-center font-medium h-16 px-4 max-w-[1280px] w-full mx-auto text-[#696969] text-[18px] pb-2">
      <section className="flex items-center gap-4">
        <div className="w-20">
          <img src="./public/logo.svg" alt="snap-logo" className="h-auto" />
        </div>

        <div className="flex gap-2 items-center">
          <div
            className="relative flex items-center hover:text-[#141414] transition-colors duration-200 cursor-pointer"
            onMouseEnter={() => setFeatures(true)}
            onMouseLeave={() => setFeatures(false)}
          >
            <span>Features</span>
            {features ? (
              <RiArrowDropUpLine size={24} className="ml-1" />
            ) : (
              <RiArrowDropDownLine size={24} className="ml-1" />
            )}
            {features && (
              <div className="absolute top-8 left-0 bg-white shadow-md rounded-md p-2 text-sm">
                <p>Todo Lists</p>
                <p>Calendars</p>
                <p>Reminders</p>
                <p>Planning</p>
              </div>
            )}
          </div>

          <div
            className="relative flex items-center hover:text-[#141414] transition-colors duration-200 cursor-pointer"
            onMouseEnter={() => setCompany(true)}
            onMouseLeave={() => setCompany(false)}
          >
            <span>Company</span>
            {company ? (
              <RiArrowDropUpLine size={24} />
            ) : (
              <RiArrowDropDownLine size={24} />
            )}
            {company && (
              <div className="absolute top-8 left-0 bg-white shadow-md rounded-md p-2 text-sm">
                <p>History</p>
                <p>Our Team</p>
                <p>Blog</p>
              </div>
            )}
          </div>

          <div className="hover:text-[#141414] transition-colors duration-200 cursor-pointer">
            Careers
          </div>

          <div className="hover:text-[#141414] transition-colors duration-200 cursor-pointer">
            About
          </div>
        </div>
      </section>

      <div className="flex gap-4 items-center h-16 px-4">
        <div className="hover:text-[#141414] transition-colors duration-200 cursor-pointer">
          Login
        </div>
        <button className="hover:text-[#141414] border border-[#696969] hover:border-[#141414] rounded-lg py-1 px-3 transition-colors duration-200">
          Register
        </button>
      </div>
    </main>
  );
};

export default HeaderNav;
