import ArrowDownIcon from "icons/ArrowDownIcon";
import InfoIcon from "icons/InfoIcon";

interface ProjectionProps {
  decrease?: boolean;
  percent: number;
  title: string;
  info?: string;
}

const Projection = ({
  percent,
  title,
  info = "",
  decrease = true,
}: ProjectionProps) => {
  return (
    <div className="border-1 border-solid border-blue rounded-lg h-[104px] w-32">
      <div className="flex justify-end pr-1 pt-0.5">
        <button>
          <InfoIcon />
        </button>
      </div>
      <p className="text-center text-sm">{title}</p>
      <div className="flex justify-center items-center space-x-1 pb-4">
        <h3 className="font-semibold text-2xl">{percent}%</h3>
        <ArrowDownIcon />
      </div>
    </div>
  );
};

export default Projection;
