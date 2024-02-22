import amazon from "../assets/images/amazon.png";
import snow from "../assets/images/snowflake.png";
import bigQ from "../assets/images/bigQ.png";
import data from "../assets/images/databricks.png";
import star from "../assets/images/star.png";
import saleforce from "../assets/images/saleforce.png";
import sap from "../assets/images/sap.png";
import google from "../assets/images/google.png";

const Section = () => {
  return (
    <div className="border-t border-b px-10 lg:px-20 py-5">
      <p className="font-primary text-2xl">Integrated with your data platform where it exists today</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center place-items-center p-2 lg:p-10 gap-3 lg:gap-4">
        <img src={snow} alt="" className="h-10" />
        <img src={amazon} alt="" className="h-10" />
        <img src={google} alt="" className="h-10" />
        <img src={data} alt="" className="h-10" />
        <img src={star} alt="" className="h-10" />
        <img src={sap} alt="" className="h-10" />
        <img src={saleforce} alt="" className="h-10" />
        <img src={bigQ} alt="" className="h-10" />


      </div>
    </div>
  );
};

export default Section;
