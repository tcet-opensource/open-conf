import CountUp from "react-countup";

const CustomCountUp = () => {
  return (
    <div className="text-3xl font-medium lg:text-5xl p-2 lg:p-4 lg:text-right rounded-xl">
      <CountUp end={350} duration={5} />+
      <p className="text-base mt-2 font-normal">PEOPLE REGISTERED</p>
    </div>
  );
};

export default CustomCountUp