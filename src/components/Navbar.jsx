import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

import logo from "../assets/images/logo.svg";
import nba from "../assets/images/nba.png";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { MdOutlineArrowOutward } from "react-icons/md";
import { PiArrowElbowDownRight } from "react-icons/pi";
import MobileNavbar from "./MobileNavbar";
const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".navbar")) {
        setOpenDropdown(null);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleClick = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };
  // const handleMouseEnter = (dropdown) => {
  //   setOpenDropdown(dropdown);
  // };

  // const handleMouseLeave = () => {
  //   // Do nothing when mouse leaves
  // };

  // const handleClick = (dropdown) => {
  //   setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  // };

  return (
<div className="fixed bg-white w-full z-50 ">
<div className="flex flex-row border-b-2 items-center justify-between lg:justify-around border-black gap-2 px-5">
      <div className="flex items-center justify-between w-full lg:w-auto ">
        <span className="lg:border-x-2 lg:border-black p-3 cursor-pointer">
          <img src={logo} alt="" className=" h-8" />
        </span>
        <span className="lg:hidden cursor-pointer">
          {mobileMenuOpen ? (
            <MdClose
              onClick={toggleMobileMenu}
              className="text-3xl cursor-pointer"
            />
          ) : (
            <RxHamburgerMenu
              onClick={toggleMobileMenu}
              className="text-3xl cursor-pointer"
            />
          )}
        </span>
      </div>
 
      <ul className="hidden lg:flex justify-between gap-24 text-xl font-secondary ">
        <li
          onMouseEnter={() => handleMouseEnter("products")}
          onClick={() => handleClick("products")} className="cursor-pointer"
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
                  <ul className=" grid grid-cols-2 gap-10 font-secondary text-base">
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
          onClick={() => handleClick("solutions")} className="cursor-pointer"
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
        <li className="cursor-pointer" >Careers</li>
        <li
          onMouseEnter={() => handleMouseEnter("resources")}
          onClick={() => handleClick("resources")} className="cursor-pointer"
        >
          {" "}
          <span className="flex items-center gap-1">
            Resources
            {openDropdown === "resources" ? <LuChevronUp /> : <LuChevronDown />}
          </span>
          {openDropdown === "resources" && (
            <div className="absolute bg-white mt-5 px-4 right-0 left-0 border-b-2 border-black">
              {/* <h3>Product</h3> */}
              <div className="flex justify-between gap-5 px-10">
                {" "}
                <div className="py-5">
                  <h3 className="py-4">Product</h3>{" "}
                  <ul className=" grid grid-cols-2 gap-y-5 gap-x-20 text-base font-secondary">
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight />
                        Company
                      </span>{" "}
                    </li>
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight />
                        Career
                      </span>
                    </li>
                    <li className="">
                      <span className="flex gap-2 items-center">
                        <PiArrowElbowDownRight /> Blog
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
      </ul>
      <div className="hidden lg:flex items-center border-black  ">
        <p className="border-l-2 border-black p-4 hover:bg-[#275141] cursor-pointer hover:text-white">
          <span className="flex flex-row items-center gap-1 ">
            Login <MdOutlineArrowOutward className="text-[#275141]" />
          </span>
        </p>
        <p className=" border-x-2 border-black p-4 hover:bg-[#275141] cursor-pointer hover:text-white">
          {" "}
          <span className="flex flex-row items-center gap-1 ">
            Join our Waitlist
            <MdOutlineArrowOutward className="text-[#275141]" />
          </span>
        </p>
      </div>
      {/* <div className="lg:hidden">
        <RxHamburgerMenu />
      </div> */}
    </div>
    <MobileNavbar
        isOpen={mobileMenuOpen}
        setOpen={setMobileMenuOpen}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
</div>
    
  );
};

export default Navbar;
