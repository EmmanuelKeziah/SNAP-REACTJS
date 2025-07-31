import HeroText from "../../block/heroblock/heroText";
import HeroImage from "../../block/heroblock/heroImage";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:justify-between bg-green-400 mx-auto items-center max-w-[1200px]">
      <HeroText />
      <HeroImage />
    </div>
  );
};

export default Hero;
