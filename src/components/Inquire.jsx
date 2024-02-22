import { HiOutlineArrowLongRight } from "react-icons/hi2";

const Inquire = () => {
  return (
    <div className="border-y border-black p-10 bg-[#E4F0F0] space-y-4">
      <h3 className="font-secondary text-base text-[#737389]">INQUIRE</h3>
      <h1 className=" font-primary text-4xl text-[#275141]">
        Help Us Shape the Future of Self Service Analytics
      </h1>
      <p className="font-secondary text-base text-[#737389]">
        Join our waitlist to get updates from the TextQL team and be the first
        to hear about the cutting edge of self service analyticss.
      </p>
      <button className="border border-black  py-3 px-5 font-secondary text-base text-[#275141]">
        {" "}
        <span className="flex justify-between gap-48 items-center">
          Join our waitlist <HiOutlineArrowLongRight />
        </span>
      </button>
    </div>
  );
};

export default Inquire;
