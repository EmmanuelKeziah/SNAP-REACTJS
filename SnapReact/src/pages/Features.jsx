import React, { useState } from "react";
import planning from "../assets/Images/planning.svg";
import calendar from "../assets/Images/calendar.svg";
import reminders from "../assets/Images/reminders.svg";
import todo from "../assets/Images/todo.svg";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Features = () => {
  // State to manage dropdowns and mobile menu

  const [features, setFeatures] = useState(false);

  return (
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
  );
};

export default Features;
