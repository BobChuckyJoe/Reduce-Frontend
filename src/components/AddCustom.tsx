import { useState } from "react";
import CenteredModal from "components/CenteredModal";

interface AddCustomProps {}

const AddCustom = (props: AddCustomProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("");

  const reset = () => {
    setIsOpen(false);
    setType("");
    setAmount(0);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue rounded-full w-20 h-20 flex justify-center items-center"
      >
        <p className="text-white text-5xl -mt-1 font-bold">+</p>
      </button>
      <CenteredModal isOpen={isOpen} onClose={reset}>
        <h3 className="font-semibold text-lg">Add custom trash</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            reset();
          }}
          onReset={reset}
        >
          <p>Type of trash:</p>
          <input
            className="mb-2"
            type="text"
            required
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <p>Amount of trash:</p>
          <input
            className="mb-2"
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />
          <div className="flex justify-center space-x-2">
            <button type="submit" className="rounded-md p-2 bg-[#8bd78b]">
              Add
            </button>
            <button type="reset" className="rounded-md p-2 bg-[#ed7575]">
              Cancel
            </button>
          </div>
        </form>
      </CenteredModal>
    </>
  );
};

export default AddCustom;
