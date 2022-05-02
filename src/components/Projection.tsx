import { useState } from "react";
import ArrowDownIcon from "icons/ArrowDownIcon";
import InfoIcon from "icons/InfoIcon";
import CenteredModal from "components/CenteredModal";

interface ProjectionProps {
  decrease?: boolean;
  percent: string;
  title: string;
  info: string;
}

const Projection = ({
  percent,
  title,
  info,
  decrease = true,
}: ProjectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="border-1 border-solid border-blue rounded-lg h-[104px] w-32">
        <div className="flex justify-end pr-1 pt-0.5">
          <button onClick={() => setIsOpen(true)}>
            <InfoIcon />
          </button>
        </div>
        <p className="text-center text-sm">{title}</p>
        <div className="flex justify-center items-center space-x-1 pb-4">
          <h3 className="font-semibold text-2xl">{percent}%</h3>
          <ArrowDownIcon />
        </div>
      </div>
      <CenteredModal isOpen={isOpen}>
        <h4>{info}</h4>
      </CenteredModal>
    </>
  );
};

export default Projection;
