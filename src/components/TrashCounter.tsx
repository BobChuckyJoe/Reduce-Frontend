interface TrashCounterProps {
  icon: React.ReactElement;
  amount: number;
}

const TrashCounter = ({ icon, amount }: TrashCounterProps) => {
  return (
    <div className="flex flex-row h-20 w-40">
      <div className="rounded-l-full h-full w-1/2 bg-blue flex items-center justify-center">
        {icon}
      </div>
      <div className="rounded-r-full border-solid border-y-4 border-r-4 border-blue h-full w-1/2 bg-white flex items-center justify-center">
        <p className="text-blue text-lg">{amount}</p>
      </div>
    </div>
  );
};

export default TrashCounter;
