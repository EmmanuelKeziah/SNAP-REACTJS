import HeroText from "../../block/heroblock/heroText";
import HeroImage from "../../block/heroblock/heroImage";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse   flex-wrap lg:flex-row justify-between max-w-[1200px]  mx-auto items-center">
      <HeroText />
      <HeroImage />
    </div>
  );
};

export default Hero;
