interface TrashCountProps {
  icon: React.ReactElement;
  name: string;
  amount: number;
}

const TrashCount = ({ icon, name, amount }: TrashCountProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row h-20 w-40 px-2 mb-1">
        <div className="rounded-l-2xl h-full w-1/2 bg-blue flex items-center justify-center">
          {icon}
        </div>
        <div className="rounded-r-2xl border-solid border-y-1 border-r-1 border-blue h-full w-1/2 bg-white flex items-center justify-center">
          <p className="text-blue font-bold text-3xl">{amount}</p>
        </div>
      </div>
      <p className="text-sm">{name}</p>
    </div>
  );
};

export default TrashCount;
