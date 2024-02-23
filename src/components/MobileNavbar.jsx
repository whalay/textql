import React from "react";
import { MdClose } from "react-icons/md";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { PiArrowElbowDownRight } from "react-icons/pi";
import { MdOutlineArrowOutward } from "react-icons/md";

import nba from "../assets/images/nba.png";
import logo from "../assets/images/logo.svg";

const MobileNavbar = ({ isOpen, setOpen, openDropdown, setOpenDropdown }) => {
  const handleDropdownClick = (dropdown) => {
    setOpenDropdown(dropdown === openDropdown ? null : dropdown);
  };

  return (
    <div className={`lg:hidden bg-white fixed w-full h-screen z-50 ${isOpen ? "block" : "hidden"}`} >

      <div className="lg:hidden h-96 overflow-y-scroll ">
        <ul className="lg:hidden flex flex-col justify-between text-xl font-secondary gap-y-4 px-10 py-8 ">
          <li
            onMouseEnter={() => handleDropdownClick("products")}
            onClick={() => handleDropdownClick("products")} className="cursor-pointer"
          >
            {" "}
            <span className="flex items-center gap-1 ">
              Produts
              {openDropdown === "products" ? (
                <LuChevronUp />
              ) : (
                <LuChevronDown />
              )}
            </span>
            {openDropdown === "products" && (
              <div className=" bg-white">
                {/* <h3>Product</h3> */}
                <div className="flex justify-between gap-1 ">
                  {" "}
                  <div className="py-5">
                    <h3 className="py-2">Product</h3>{" "}
                    <ul className=" grid grid-cols-1 gap-6 font-secondary text-base">
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
                </div>
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => handleDropdownClick("solutions")}
            onClick={() => handleDropdownClick("solutions")} className="cursor-pointer"
          >
            {" "}
            <span className="flex items-center gap-1 ">
              Solutions
              {openDropdown === "solutions" ? (
                <LuChevronUp />
              ) : (
                <LuChevronDown />
              )}
            </span>
            {openDropdown === "solutions" && (
              <div className=" bg-white">
                {/* <h3>Product</h3> */}
                <div className="flex flex-col gap-1 ">
                  {" "}
                  <div className="py-2">
                    <h3 className="py-2 text-lg font-secondary">Solutions for Industries</h3>{" "}
                    <ul className=" grid grid-cols-1 gap-6 font-secondary text-base">
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
                  <div className="py-2">
                  <h3 className="py-2 text-lg font-secondary ">Solutions for Teams</h3>{" "}
                  <ul className=" grid grid-cols-1 gap-6 font-secondary text-base">
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
          <li className="cursor-pointer">Careers</li>
          <li className="cursor-pointer"
            onMouseEnter={() => handleDropdownClick("resources")}
            onClick={() => handleDropdownClick("resources")}
          >
            {" "}
            <span className="flex items-center gap-1">
              Resources
              {openDropdown === "resources" ? (
                <LuChevronUp />
              ) : (
                <LuChevronDown />
              )}
            </span>
            {openDropdown === "resources" && (
              <div className=" bg-white">
                {/* <h3>Product</h3> */}
                <div className="flex justify-between gap-1 ">
                  {" "}
                  <div className="py-5">
                    <h3 className="py-2">Company</h3>{" "}
                    <ul className=" grid grid-cols-1 gap-6 font-secondary text-base">
                      <li className="">
                        <span className="flex gap-2 items-center">
                          <PiArrowElbowDownRight />
                          Career
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
                          <PiArrowElbowDownRight /> Blog
                        </span>
                      </li>
                      <li className="">
                        <span className="flex gap-2 items-center">
                          <PiArrowElbowDownRight />
                          Contact
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>
        <div className="lg:hidden flex flex-col items-start border-black w-full px-5 gap-y-3 ">
        <button className="border-2 border-black p-4 hover:bg-[#275141] cursor-pointer hover:text-white w-full">
          <span className="flex flex-row items-center gap-1 ">
            Login <MdOutlineArrowOutward className="text-[#275141]" />
          </span>
        </button>
        <button className=" border-2 border-black p-4 hover:bg-[#275141] cursor-pointer hover:text-white w-full">
          {" "}
          <span className="flex flex-row items-center gap-1 ">
            Join our Waitlist
            <MdOutlineArrowOutward className="text-[#275141]" />
          </span>
        </button>
      </div>
      </div>

    </div>
  );
};

export default MobileNavbar;
