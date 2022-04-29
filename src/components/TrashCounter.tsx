import DotsIcon from "icons/DotsIcon";
import { useState } from "react";

interface TrashCounterProps {
  icon: React.ReactElement;
  amount: number;
  name: string;
}

const TrashCounter = ({ icon, amount, name }: TrashCounterProps) => {
  const [numTrash, setNumTrash] = useState(amount);

  return (
    <div className="flex flex-col items-center rounded-2xl border-1 border-blue border-solid drop-shadow-md bg-[#e5e5e5] py-2">
      <div className="w-full flex justify-end pr-3 mb-1">
        <button>
          <DotsIcon />
        </button>
      </div>
      <button
        className="flex flex-row h-20 w-40 px-2 mb-1"
        onClick={() => setNumTrash((numTrash) => numTrash + 1)}
      >
        <div className="rounded-l-2xl h-full w-1/2 bg-blue flex items-center justify-center">
          {icon}
        </div>
        <div className="rounded-r-2xl border-solid border-y-1 border-r-1 border-blue h-full w-1/2 bg-white flex items-center justify-center">
          <p className="text-blue font-bold text-3xl">{numTrash}</p>
        </div>
      </button>
      <p className="text-sm">{name}</p>
    </div>
  );
};

export default TrashCounter;
