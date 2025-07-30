import React, { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import planning from "../../assets/Images/planning.svg";
import calendar from "../../assets/Images/calendar.svg";
import reminders from "../../assets/Images/reminders.svg";
import todo from "../../assets/Images/todo.svg";

const HeaderMobile = () => {
  const [handleToggle, setHandleToggle] = useState(false);
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);
  return (
    <div>
      {/* Toggle for hamburger Menu */}
      <div className="lg:hidden flex items-center">
        {handleToggle ? (
          <MdClose size={24} onClick={() => setHandleToggle(false)} />
        ) : (
          <RxHamburgerMenu size={24} onClick={() => setHandleToggle(true)} />
        )}
      </div>

      {handleToggle && (
        <div className="absolute shadow-md z-50 top-11 bottom-0 w-[70vw] sm:w-[40vw] space-y-3 bg-white flex flex-col px-6 py-4 lg:hidden right-1 ">
          <div className="flex flex-col gap-2">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setFeatures(!features)}
            >
              <span className="hover:text-[#141414]">Features</span>
              {features ? (
                <RiArrowDropUpLine size={24} />
              ) : (
                <RiArrowDropDownLine size={24} />
              )}
            </div>

            {features && (
              <div className="flex flex-col pl-2 text-left ">
                <div className="flex gap-2">
                  <img src={todo} alt="Todo-icon" className="w-5 h-5" />
                  <span className="hover:text-[#141414] hover:cursor-pointer mb-1">
                    Todo Lists
                  </span>
                </div>

                <div className="flex gap-2">
                  <img src={calendar} alt="calendar-icon" className="w-5 h-5" />
                  <span className="hover:text-[#141414] hover:cursor-pointer mb-1">
                    Calendars
                  </span>
                </div>

                <div className="flex gap-2">
                  <img
                    src={reminders}
                    alt="reminders-icon"
                    className="w-5 h-5"
                  />
                  <span className="hover:text-[#141414] hover:cursor-pointer mb-1">
                    Reminders
                  </span>
                </div>

                <div className="flex gap-2">
                  <img src={planning} alt="planning-icon" className="w-5 h-5" />
                  <span className="hover:text-[#141414] hover:cursor-pointer mb-2">
                    Planning
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Company SideBar*/}

          <div className="flex flex-col gap-1">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setCompany(!company)}
            >
              <span className="hover:text-[#141414]">Company</span>
              {company ? (
                <RiArrowDropUpLine size={24} />
              ) : (
                <RiArrowDropDownLine size={24} />
              )}
            </div>

            {company && (
              <div className="flex flex-col pl-2">
                <div className="flex gap-2">
                  <span className="hover:text-[#141414] hover:cursor-pointer mb-1">
                    History
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="hover:text-[#141414] hover:cursor-pointer mb-1">
                    Our Team
                  </span>
                </div>

                <div className="flex gap-2">
                  <span className="hover:text-[#141414] hover:cursor-pointer mb-1">
                    Our Blog
                  </span>
                </div>
              </div>
            )}
          </div>

          <div>
            <span className="hover:cursor-pointer hover:text-[#141414]">
              Careers
            </span>
          </div>

          <div>
            <span className="hover:cursor-pointer hover:text-[#141414]">
              About
            </span>
          </div>

          <div className="flex flex-col space-y-2 justify-between items-center">
            <div className="hover:cursor-pointer">Login</div>
            <button className="border-1 border-[#141414] px-[30%] py-1 rounded-lg hover:bg-[#141414] hover:text-white transition-colors duration-300 hover:cursor-pointer shadow-md">
              Register
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMobile;
