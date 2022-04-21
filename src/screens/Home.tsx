import GraphPreview from "components/GraphPreview";
import Navbar from "components/Navbar";
import TrashCounter from "components/TrashCounter";
import CanIcon from "icons/CanIcon";
import PaperCupIcon from "icons/PaperCupIcon";
import PaperIcon from "icons/PaperIcon";
import WaterBottleIcon from "icons/WaterBottleIcon";

const data = [
  ["Date", "Amount"],
  [1, 4],
  [2, 5],
  [3, 7],
  [4, 3],
];

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="p-4 w-full flex flex-col items-center">
        <div className="mb-4">
          <GraphPreview data={data} />
        </div>
        <div className="flex flex-row space-x-4 mb-4">
          <TrashCounter amount={7} icon={<WaterBottleIcon />} />
          <TrashCounter amount={7} icon={<CanIcon />} />
        </div>
        <div className="flex flex-row space-x-4 mb-4">
          <TrashCounter amount={7} icon={<PaperCupIcon />} />
          <TrashCounter amount={7} icon={<PaperIcon />} />
        </div>
        <button className="bg-blue rounded-full w-20 h-20 flex justify-center items-center">
          <p className="text-white text-5xl font-bold">+</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
