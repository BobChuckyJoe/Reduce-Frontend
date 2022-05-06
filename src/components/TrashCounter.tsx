import CenteredModal from "components/CenteredModal";
import { decreaseStatsURL, increaseStatsURL } from "Endpoints";
import DotsIcon from "icons/DotsIcon";
import { useState } from "react";

interface TrashCounterProps {
  icon: React.ReactElement;
  amount: number;
  name: string;
  id: string;
}

const TrashCounter = ({ icon, amount, name, id }: TrashCounterProps) => {
  const [numTrash, setNumTrash] = useState(amount);
  const [isOpen, setIsOpen] = useState(false);

  const decrease = async () => {
    if (numTrash > 0) {
      setNumTrash(numTrash - 1);
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trash_type: id }),
      };
      await fetch(decreaseStatsURL, options);
    }
  };

  const increase = async () => {
    setNumTrash(numTrash + 1);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ trash_type: id }),
    };
    await fetch(increaseStatsURL, options);
  };

  return (
    <>
      <div className="flex flex-col items-center rounded-2xl border-1 border-blue border-solid drop-shadow-md bg-[#e5e5e5] py-2">
        <div className="w-full flex justify-end pr-3 mb-1">
          <button onClick={() => setIsOpen(true)}>
            <DotsIcon />
          </button>
        </div>
        <button
          className="flex flex-row h-20 w-40 px-2 mb-1"
          onClick={increase}
        >
          <div className="rounded-l-2xl h-full w-1/2 bg-blue flex items-center justify-center">
            {icon}
          </div>
          <div className="rounded-r-2xl border-solid border-y-1 border-r-1 border-blue h-full w-1/2 bg-white flex items-center justify-center">
            <p className="font-bold text-3xl">{numTrash}</p>
          </div>
        </button>
        <p className="text-sm">{name}</p>
      </div>
      <CenteredModal isOpen={isOpen}>
        <h3 className="font-semibold text-lg">Decrease trash count</h3>
        <p className="mb-2">This will decrease your trash count by 1.</p>
        <div className="flex space-x-2 justify-center">
          <button
            className="rounded-md p-2 bg-[#8bd78b]"
            onClick={() => {
              decrease();
              setIsOpen(false);
            }}
          >
            Confirm
          </button>
          <button
            className="rounded-md p-2 bg-[#ed7575]"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
        </div>
      </CenteredModal>
    </>
  );
};

export default TrashCounter;
