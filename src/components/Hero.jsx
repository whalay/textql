const Hero = () => {
  return (
    <div className="lg:h-screen  px-10 lg:bg-herobg flex flex-col justify-center lg:gap-32 gap-20 py-20 lg:py-0">
      <div className="flex  items-start justify-start  gap-x-10 ">
        
          <h1 className="text-4xl lg:text-7xl font-primary">
            Enterprise AI across your Data Platform
          </h1>
      
        <p className="text-xl lg:text-3xl font-secondary ">
          Ana is your team's personal data scientist
        </p>
      </div>
      <div className="lg:w-2/4  flex">
        <input type="text" className="email border border-black  w-full " />
        <button className="border border-black font-primary text-base">Join our waitlist</button>
      </div>
    </div>
  );
};

export default Hero;
