import "./Header.css"
import HeaderNav1 from "../../block/headerblock/HeaderNav1.jsx";
import HeaderNav2 from "../../block/headerblock/HeaderNav2.jsx";

const Header = () => {
    return (
        <div className="mainHeader">
           <HeaderNav1 />

           <HeaderNav2 />
        </div>
    );
}

export default Header;