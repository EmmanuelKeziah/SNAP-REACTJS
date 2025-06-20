import "./Hero.css"
import HeroText from "../../block/heroblock/HeroText.jsx";
import HeroImage from "../../block/heroblock/HeroImage.jsx";


const Hero = () => {
    return (
        <div className="heroContainer">
            <HeroText />
            <HeroImage />
        </div>
    );
};





export default Hero;