import ins1 from "../assets/images/insight1.png";
import ins2 from "../assets/images/insight2.png";
import ins3 from "../assets/images/insight3.png";

const Insights = () => {
  return (
    <div className=" p-10 lg:p-20 ">
      <h3 className="text-center font-secondary text-base text-[#737389]">INSIGHTS</h3>
      <h1 className="text-center font-primary text-4xl text-[#275141] m-2 ">Unlocking Data's Full Potential</h1>
      <p className="text-center font-secondary text-base text-[#737389] mb-1">Discover how TextQL has helped clients across various industries.</p>

      <div className="grid grid-cols-1 lg:grid-cols-3  items-center  justify-between gap-7">
        <div className="border">
            <img src={ins1} alt="" className="h-42 lg:h-48 w-full" />
          <div className="p-4 flex flex-col items-start justify-between gap-10">
            <h2 className=" font-primary text-xl text-[#275141]">What If The Model Isn't Good Enough?</h2>
            <button className="text-base font-secondary">Read more</button>
          </div>
        </div>
        <div className="border">
        <div >
            {" "}
            <img src={ins2} alt=""  className="h-42 lg:h-48 "/>
          </div>{" "}
          <div className="p-5 flex flex-col items-start justify-between gap-10">
          <h2 className=" font-primary text-xl text-[#275141]">Our Ten Year Thesis</h2>
          <button className="text-base font-secondary">Read more</button>
          </div>
        </div>
        <div className="border">
        <div >
            {" "}
            <img src={ins3} alt="" className="h-42 lg:h-48" />
          </div>{" "}
          <div className="p-5 flex flex-col items-start justify-between gap-10">
          <h2 className=" font-primary text-xl text-[#275141]">Introducing the Capsule</h2>
          <button className="text-base font-secondary">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
