import slack from "../assets/images/slack.png";
import tee from "../assets/images/Tee.png";
import first from "../assets/images/first.png";
import second from "../assets/images/second.png";
import third from "../assets/images/third.png";

import notion from "../assets/images/notion.png";
import sheet from "../assets/images/sheet.png";
import word from "../assets/images/word.png";
import confle from "../assets/images/confle.png";
import { PiArrowElbowDownRight } from "react-icons/pi";

import { HiOutlineArrowLongRight } from "react-icons/hi2";

const data = [{}];

const Blog = () => {
  return (
    <div className="px-10 lg:px-20 py-10 ">
      <div className="border-l-2 px-10 lg:px-20 border-black">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 lg:p-20 items-center  border-b-2  ">
          <div className="lg:flex-1 flex-row items-start space-y-6 relative ">
            <div className="absolute -left-[60px] lg:-left-[200px] top-5 border-2 px-2 lg:py-4 lg:px-5 bg-white text-lg lg:text-2xl">
              01
            </div>
            <h3 className="font-secondary text-base ">COMMUNICATE</h3>
            <h1 className="font-primary text-3xl text-[#275141] ">
              Ana works where your team lives
            </h1>
            <p className="font-secondary text-base">
              Collaborate with Ana to analyze your data where your team lives.
              In Slack, Teams, or any other platform{" "}
            </p>
            <div className="flex gap-10 ">
              <img src={slack} alt="" className="h-10" />
              <img src={tee} alt="" className="h-10" />
            </div>
            <button className="border w-full py-3 px-5 font-secondary text-base text-[#275141]">
              {" "}
              <span className="flex justify-between items-center">
                Learn More
                <HiOutlineArrowLongRight />
              </span>
            </button>
          </div>
          <div className="flex-1">
            <img src={first} alt="" className=" h-96 " />
          </div>{" "}
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 lg:p-20 items-center  border-b-2  ">
          <div className="flex-1 flex-row items-start space-y-6 relative ">
            <div className="absolute -left-[60px] lg:-left-[200px] top-5 border-2 px-2 lg:py-4 lg:px-5 bg-white text-lg lg:text-2xl">
              02
            </div>
            <h3 className="font-secondary text-base ">DISCOVER</h3>
            <h1 className="font-primary text-3xl text-[#275141] ">
              Integrated across your Business Intelligence System
            </h1>
            <p className="font-secondary text-base">
              No more dashboard sprawl - Ana is your business team’s first stop
              to find any dashboard or metric in your business intelligence
              platforms{" "}
            </p>
            <ul>
              <li>
                <span className="flex gap-3 items-start font-secondary text-base">
                  <PiArrowElbowDownRight /> Ana retrieves any dashboard,
                  preventing redundant dashboard creation
                </span>
              </li>
              <li>
                <span className="flex gap-3 items-start font-secondary text-base">
                  <PiArrowElbowDownRight /> Ana navigates your semantic layer
                  with 100% certainty
                </span>
              </li>
            </ul>
            <button className="border w-full py-3 px-5 font-secondary text-base text-[#275141]">
              {" "}
              <span className="flex justify-between items-center">
                Learn More
                <HiOutlineArrowLongRight />
              </span>
            </button>
          </div>
          <div className="flex-1">
            <img src={second} alt="" className=" h-96 " />
          </div>{" "}
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 lg:p-20 items-center  border-b-2  ">
          <div className="flex-1 flex-row items-start space-y-6 relative ">
            <div className="absolute -left-[60px] lg:-left-[200px] top-5 border-2 px-2 lg:py-4 lg:px-5 bg-white text-lg lg:text-2xl">
              03
            </div>
            <h1 className="font-primary text-3xl text-[#275141] ">
              Ana manages your entire data catalog
            </h1>
            <p className="font-secondary text-base">
              Ana writes your latest dbt docs, and also knows about the google
              doc titled “sales-ops-data-definitions-2.0-2022-v2”
            </p>
            <ul>
              <li>
                <span className="flex gap-3 items-start font-secondary text-base">
                  <PiArrowElbowDownRight /> Indexes all the places where your
                  teams store messy metadata
                </span>
              </li>
              <li>
                <span className="flex gap-3 items-start font-secondary text-base">
                  <PiArrowElbowDownRight /> Surfaces definitions from anywhere
                  with verified links
                </span>
              </li>
              <li>
                <span className="flex gap-3 items-start font-secondary text-base">
                  <PiArrowElbowDownRight /> Understands that different teams
                  have different definitions
                </span>
              </li>
            </ul>
            <div className="flex gap-10">
              <img src={sheet} alt="" className="h-10" />
              <img src={word} alt="" className="h-10" />
              <img src={notion} alt="" className="h-10" />
              <img src={confle} alt="" className="h-10" />
            </div>
            <button className="border w-full py-3 px-5 font-secondary text-base text-[#275141]">
              {" "}
              <span className="flex justify-between items-center">
                Learn More
                <HiOutlineArrowLongRight />
              </span>
            </button>
          </div>
          <div className="flex-1">
            <img src={third} alt="" className="h-96" />
          </div>{" "}
        </div>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 lg:p-20 items-center  border-b-2  ">
          <div className="flex-1 flex-row items-start space-y-6 relative ">
          <div className="absolute -left-[60px] lg:-left-[200px] top-5 border-2 px-2 lg:py-4 lg:px-5 bg-white text-lg lg:text-2xl">04</div>

            <h3 className="font-secondary text-base ">ACCELERATE</h3>
            <h1 className="font-primary text-3xl text-[#275141] ">
              Enterprise ready LLMs fluent in SQL & Python
            </h1>
            <p className="font-secondary text-base">
              We're not an Al company, we're a data company. We've taken care of
              the Al for you.
            </p>
            <ul>
              <li>Secure & Compliant Deployments</li>
              <li>
                <span className="flex gap-3 items-start font-secondary text-base">
                  <PiArrowElbowDownRight />
                  Ana can be configured for any compliance standard required by
                  your company, using different LLMs for different needs
                </span>
              </li>
              <li>Workflows Native for Your Team</li>
              <li>
                <span className="flex gap-3 items-start font-secondary text-base">
                  <PiArrowElbowDownRight /> We can fine tune LLMs to the needs
                  your team has, getting more intelligent
                </span>
              </li>
              <li>Protecting your Data with Guardrails</li>
              <li>
                <span className="flex gap-3 items-start font-secondary text-base">
                  <PiArrowElbowDownRight /> Apply industry-leading guardrails to
                  anonymize your data through our Incognito engine, so no LLM
                  sees your customer's name or phone number
                </span>
              </li>
            </ul>
            <button className="border w-full py-3 px-5 font-secondary text-base text-[#275141]">
              {" "}
              <span className="flex justify-between items-center">
                Learn More
                <HiOutlineArrowLongRight />
              </span>
            </button>
          </div>
          <div className="flex-1">
            <img src={second} alt="" className=" h-96 " />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Blog;
