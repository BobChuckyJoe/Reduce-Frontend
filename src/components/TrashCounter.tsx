import { useState } from "react";

interface TrashCounterProps {
  icon: React.ReactElement;
  amount: number;
}

const TrashCounter = ({ icon, amount }: TrashCounterProps) => {
  const [numTrash, setNumTrash] = useState(amount);

  return (
    <button
      className="flex flex-row h-20 w-40"
      onClick={() => setNumTrash((numTrash) => numTrash + 1)}
    >
      <div className="rounded-l-full h-full w-1/2 bg-blue flex items-center justify-center">
        {icon}
      </div>
      <div className="rounded-r-full border-solid border-y-4 border-r-4 border-blue h-full w-1/2 bg-white flex items-center justify-center">
        <p className="text-blue font-bold text-3xl">{numTrash}</p>
      </div>
    </button>
  );
};

export default TrashCounter;
