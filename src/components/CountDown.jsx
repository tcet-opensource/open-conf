import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>Event has Begun</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div className="flex gap-4 justify-center">
        <span className="flex flex-col  border border-slate-200 text-center text-3xl lg:text-5xl bg-slate-100 font-medium w-24 p-4 rounded-xl">
          {days}
          <p className="text-lg font-normal">days</p>
        </span>
        <span className="flex flex-col  border border-slate-200 text-center text-3xl lg:text-5xl bg-slate-100 font-medium w-24 p-4 rounded-xl">
          {hours}
          <p className="text-lg font-normal">hours</p>
        </span>
        <span className="flex flex-col  border border-slate-200 text-center text-3xl lg:text-5xl bg-slate-100 font-medium w-24 p-4 rounded-xl">
          {minutes}
          <p className="text-lg font-normal">min</p>
        </span>
        <span className="flex flex-col  border border-slate-200 text-center text-3xl lg:text-5xl bg-slate-100 font-medium w-24 p-4 rounded-xl">
          {seconds}
          <p className="text-lg font-normal">sec</p>
        </span>
      </div>
    );
  }
};

const CountDown = () => {
  return (
    <div className="" >
      <p className="w-fit  text-xl mb-2 font-medium " >Time Left</p>
      <Countdown date={"2023-07-21T10:30:00"} renderer={renderer} />
    </div>
  );
};

export default CountDown;
