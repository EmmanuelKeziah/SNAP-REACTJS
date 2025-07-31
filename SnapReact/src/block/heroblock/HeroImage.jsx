import heroDesktop from "../../assets/images/heroDesktop.png";

const HeroImage = () => {
  return (
    <div className=" bg-red-600 w-[90%] lg:w-[40%] lg:mr-[100px] lg:mt-[30px] flex items-center justify-center object-contain">
      <img
        src={heroDesktop}
        alt="hero-desktop-image"
        className="lg:max-h-[500px] h-auto w-full  object-contain shadow-md rounded-lg"
      />
    </div>
  );
};

export default HeroImage;
