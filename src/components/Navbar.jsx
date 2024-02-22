import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/images/logo.svg";
import nba from "../assets/images/nba.png";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { MdOutlineArrowOutward } from "react-icons/md";
import { PiArrowElbowDownRight } from "react-icons/pi";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    // Do nothing when mouse leaves
  };

  const handleClick = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="flex flex-row border-b-2 items-center justify-between lg:justify-around border-black gap-2 px-5">
      <div className=" lg:border-x-2 lg:border-black p-3">
        <img src={logo} alt="" className=" h-8" />
      </div>
      <ul className="hidden lg:flex justify-between gap-24 text-xl font-secondary ">
        <li
          onMouseEnter={() => handleMouseEnter("products")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("products")}
        >
          {" "}
          <span className="flex items-center gap-1">
            Produts
            {openDropdown === "products" ? <LuChevronUp /> : <LuChevronDown />}
          </span>
          {openDropdown === "products" && (
            <div className="absolute bg-white mt-5 px-4 right-0 left-0 border-b-2 border-black">
              {/* <h3>Product</h3> */}
              <div className="flex justify-between gap-5 px-10">
                {" "}
                <div className="py-5">
                  <h3 className="py-4">Product</h3>{" "}
                  <ul className=" grid grid-cols-2 gap-10">
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight />
                        Conversation
                      </span>{" "}
                    </li>
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight />
                        AI
                      </span>
                    </li>
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight /> Business Intelligence
                      </span>
                    </li>
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight />
                        Integrations
                      </span>
                    </li>
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight /> Metadata Integrations
                      </span>
                    </li>
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight /> Embedded Ana
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#EDFCF2] p-5 w-1/2">
                  <h1 className="py-4">Featured from Blog</h1>
                  <div className="flex gap-3 items-center">
                    <img src={nba} alt="" className="h-32" />
                    <div>
                      <h2>TextQL Joins NBA Launchpad</h2>
                      <p>Read more</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </li>
        <li
          onMouseEnter={() => handleMouseEnter("solutions")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("solutions")}
        >
          {" "}
          <span className="flex items-center gap-1">
            Solutions
            {openDropdown === "solutions" ? <LuChevronUp /> : <LuChevronDown />}
          </span>
          {openDropdown === "solutions" && (
            <div className="absolute bg-white mt-5 px-4 right-0 left-0 border-b-2 border-black">
              {/* <h3>Product</h3> */}
              <div className="flex justify-start gap-16 px-10">
                {" "}
                <div className="py-5">
                  <h3 className="py-4">Solutions for Industries</h3>{" "}
                  <ul className=" grid grid-cols-2 gap-10">
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight />
                        Media, Telecom & Enternment
                      </span>{" "}
                    </li>
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight />
                        Retail, Logistics & CPG
                      </span>
                    </li>
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight /> Marketing Analytics
                      </span>
                    </li>
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight />
                        Healthcare
                      </span>
                    </li>
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight /> Manufacturing Industry
                      </span>
                    </li>
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight /> Financial Services
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="py-5">
                  <h3 className="py-4">Solutions for Teams</h3>{" "}
                  <ul className=" grid grid-cols-2 gap-10">
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight />
                        Data Teams
                      </span>{" "}
                    </li>
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight />
                        Revenue Teams
                      </span>
                    </li>
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight /> Marketing Teams
                      </span>
                    </li>
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight />
                        Finance Teams
                      </span>
                    </li>
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight /> Product Teams
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </li>
        <li>Careers</li>
        <li
          onMouseEnter={() => handleMouseEnter("resources")}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick("resources")}
        >
          {" "}
          <span className="flex items-center gap-1">
            Resources
            {openDropdown === "resources" ? <LuChevronUp /> : <LuChevronDown />}
          </span>
          {openDropdown === "resources" && (
            <ul className="absolute bg-gray-800 mt-2 py-2 px-4">
              <li className="text-white">Resource 1</li>
              <li className="text-white">Resource 2</li>
              <li className="text-white">Resource 3</li>
            </ul>
          )}
        </li>
      </ul>
      <div className="hidden lg:flex items-center border-black  ">
        <p className="border-l-2 border-black p-4">
          <span className="flex flex-row items-center gap-1">
            Login <MdOutlineArrowOutward />
          </span>
        </p>
        <p className=" border-x-2 border-black p-4">
          {" "}
          <span className="flex flex-row items-center gap-1">
            Join our Waitlist
            <MdOutlineArrowOutward />
          </span>
        </p>
      </div>
      <div className="lg:hidden">
        <RxHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
