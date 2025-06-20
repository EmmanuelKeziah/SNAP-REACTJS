import "./HeaderNav.css"


const HeaderNav1 = () => {
    return (
        <div className="HeaderNav1Container">
            <img src="./public/logo.svg" alt="snap-logo" />

            <nav>Features <img src="./public/arrow-icon.svg" alt="" /></nav>
            <nav>Company <img src="./public/arrow-icon.svg"></img></nav>
            <nav>Careers</nav>
            <nav>About</nav>
        </div>

    );
}

export default HeaderNav1;