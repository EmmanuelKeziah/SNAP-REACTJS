import Icons from "../../block/heroblock/Icons";
const HeroText = () => {
  return (
    <main className="flex items-center ">
      <div className=" px-8 space-y-7 ">
        <h1
          className="max-w-[75%]
        font-bold text-7xl"
        >
          Make remote work
        </h1>
        <p className="text-gray-600 max-w-[400px]">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>

        <button className="border-1 border-[#141414] hover:text-white font-semibold py-2 px-4 rounded-xl hover:bg-[#141414] hover:border-[#141414] hover:cursor-pointer">
          Learn more
        </button>

        <Icons />
      </div>
    </main>
  );
};

export default HeroText;
