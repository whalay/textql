import React from "react";
import logo from "../assets/images/logo.svg";
import ramp from "../assets/images/ramp.svg";

const Footer = () => {
  return (
    <div className="grid  lg:grid-cols-5 p-10  justify-between">
      <div className="lg:space-y-10 col-span-5 lg:col-span-1 mb-3">
        <span>
          <img src={logo} alt="" className="h-14" />
          <h3 className="text-base">Unleash the power of natural language data analysis</h3>
        </span>
        <img src={ramp} alt="" />
      </div>
      <div>
        <h2 className="text-base font-primary text-[#D1D1D1] mb-2">Product</h2>
        <ul className="text-sm space-y-3 font-secondary ">
          <li>Conversion</li>
          <li>Business Intelligence</li>
          <li>Metadata Integrations</li>
          <li>AI</li>
          <li>Embedded Analyst</li>
        </ul>
      </div>
      <div>
        <h2 className="text-base font-primary text-[#D1D1D1] mb-2">Solutions for industries</h2>
        <ul className="text-sm space-y-3 font-secondary">
          <li>Marketing Analytics</li>
          <li>Manufacturing & Industrials</li>
          <li>Media, Telecom & Entertainment</li>
          <li>REtail, Logistics & CPG</li>
          <li>Healthcare</li>
        </ul>
      </div>
      <div>
        <h2 className="text-base font-primary text-[#D1D1D1] mb-2">Solution for Teams</h2>
        <ul className="text-sm space-y-3 font-secondary">
          <li>Data Teams</li>
          <li>Marketing Teams</li>
          <li>Product Teams</li>
          <li>Revenue Teams</li>
          <li>Finance Teams</li>
        </ul>
      </div>
      <div className="col-span-5 lg:col-span-1">
        <h2 className="text-base font-primary text-[#D1D1D1] mb-2">Company</h2>
        <ul className="text-sm space-y-3 font-secondary">
            <li>About</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
