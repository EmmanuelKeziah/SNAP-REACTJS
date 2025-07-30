import heroDesktop from "../../assets/images/heroDesktop.png";

const HeroImage = () => {
  return (
    <div className=" w-full  mr-[100px] mt-[30px] flex items-center justify-center object-contain">
      <img
        src={heroDesktop}
        alt="hero-desktop-image"
        className="max-h-full max-w-full object-contain shadow-md rounded-lg"
      />
    </div>
  );
};

export default HeroImage;
