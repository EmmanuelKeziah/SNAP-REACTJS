import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import logo from "../../assets/Images/logo.svg";
import planning from "../../assets/Images/planning.svg";
import calendar from "../../assets/Images/calendar.svg";
import reminders from "../../assets/Images/reminders.svg";
import todo from "../../assets/Images/todo.svg";
import HeaderMobile from "./HeaderMobile";

const HeaderNav = () => {
  // States to manage dropdowns and mobile menu
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);

  return (
    <main className="flex gap-4 justify-between items-center font-medium h-16 px-8 pt-2 text-[#696969] text-[18px] pb-2">
      <section className="flex items-center gap-4">
        <div className="w-20 h-5">
          <img src={logo} alt="snap-logo" className="object-contain" />
        </div>

        <div className="gap-2 items-center  hidden lg:flex">
          <div
            className="relative flex items-center hover:text-[#141414] transition-colors duration-200 cursor-pointer"
            onMouseEnter={() => setFeatures(true)}
            onMouseLeave={() => setFeatures(false)}
          >
            {/* // Dropdown for Desktop Features */}
            <span>Features</span>
            {features ? (
              <RiArrowDropUpLine size={24} className="ml-1" />
            ) : (
              <RiArrowDropDownLine size={24} className="ml-1" />
            )}
            {features && (
              <div className="absolute top-8 left-0 bg-white shadow-md rounded-md text-sm px-8 py-4 space-y-3 ">
                <div className="flex items-center gap-4  ">
                  <img src={todo} alt="todo" className="w-5 h-5" />
                  <span>Todo Lists</span>
                </div>
                <div className="flex items-center gap-4">
                  <img src={calendar} alt="calendar" className="w-5 h-5" />
                  <span>Calendars</span>
                </div>
                <div className="flex items-center gap-4">
                  <img src={reminders} alt="reminder" className="w-5 h-5" />
                  <span>Reminders</span>
                </div>
                <div className="flex items-center gap-4">
                  <img src={planning} alt="planning" className="w-5 h-5" />
                  <span>Planning</span>
                </div>
              </div>
            )}
          </div>

          <div
            className="relative flex items-center hover:text-[#141414] transition-colors duration-200 cursor-pointer "
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

          <div className="hover:text-[#141414] transition-colors duration-200 cursor-pointer">
            Careers
          </div>

          <div className="hover:text-[#141414] transition-colors duration-200 cursor-pointer">
            About
          </div>
        </div>
      </section>

      <div className="gap-4 items-center h-16 px-4 lg:flex hidden ">
        <div className="hover:text-[#141414] transition-colors duration-200 cursor-pointer ">
          Login
        </div>
        <button className="hover:text-[#141414] border border-[#696969] hover:border-[#141414] rounded-lg py-1 px-3 transition-colors duration-200">
          Register
        </button>
      </div>

      <HeaderMobile />
    </main>
  );
};

export default HeaderNav;
