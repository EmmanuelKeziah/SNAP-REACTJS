import Features from "../../pages/Features";
import Company from "../../pages/Company";
import logo from "../../assets/Images/logo.svg";
import HeaderMobile from "./HeaderMobile";
import Career from "../../pages/Career";

const HeaderDesktop = () => {
  return (
    <header className="flex gap-4 justify-between items-center font-medium h-16  px-8 pt-2 text-[#696969] text-[18px] pb-2 mx-auto md:px-13 lg:px-16 xl:px-20 ">
      <section className="flex items-center gap-6 ">
        <div className="w-20 h-5">
          <img src={logo} alt="snap-logo" className="object-contain" />
        </div>

        <nav className="gap-6  items-center  hidden lg:flex">
          <Features />
          <Company />
          <Career />

          <div className="hover:text-[#141414] transition-colors duration-200 cursor-pointer">
            About
          </div>
        </nav>
      </section>
      {/* RIGHT SECTION */}
      <section className="gap-4 items-center px-4 lg:flex hidden   ">
        <div className="hover:text-[#141414] transition-colors duration-200 cursor-pointer ">
          Login
        </div>
        <button className="hover:text-[#141414] hover:cursor-pointer border border-[#696969] hover:border-[#141414] rounded-lg py-1 px-3 transition-colors duration-200">
          Register
        </button>
      </section>
      <div className="lg:hidden">
        <HeaderMobile />
      </div>
    </header>
  );
};

export default HeaderDesktop;
