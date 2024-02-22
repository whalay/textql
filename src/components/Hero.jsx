const Hero = () => {
  return (
    <div className="h-screen  px-10 lg:bg-herobg flex flex-col justify-center gap-32">
      <div className="flex  items-start justify-start  gap-x-10 ">
        
          <h1 className="text-4xl lg:text-7xl font-primary">
            Enterprise AI across your Data Platform
          </h1>
      
        <p className="text-2xl lg:text-3xl font-secondary ">
          Ana is your team's personal data scientist
        </p>
      </div>
      <div className="w-full  ">
        <input type="text" className="email border border-black w-2/4 p-2" />
        <button className="border border-black p-2 font-primary text-base">Join our waitlist</button>
      </div>
    </div>
  );
};

export default Hero;
