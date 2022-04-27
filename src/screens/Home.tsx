import GraphPreview from "components/GraphPreview";
import Navbar from "components/Navbar";
import Projection from "components/Projection";
import TrashCounter from "components/TrashCounter";
import CanIcon from "icons/CanIcon";
import CaretIcon from "icons/CaretIcon";
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
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="p-4 w-full flex flex-col items-center">
        <div className="mb-4 flex items-center space-x-2">
          <button>
            <CaretIcon right={false} />
          </button>
          <GraphPreview data={data} />
          <button>
            <CaretIcon />
          </button>
        </div>
        <div className="flex space-x-12 mb-4">
          <Projection title="Weekly Comparison" percent={15} />
          <Projection title="Annual Waste Projection" percent={1} />
        </div>
        <h3 className="font-bold text-xl mb-4">This week, I threw away</h3>
        <div className="flex flex-row space-x-4 mb-4">
          <TrashCounter
            amount={7}
            icon={<WaterBottleIcon />}
            name="water bottles"
          />
          <TrashCounter amount={7} icon={<CanIcon />} name="cans" />
        </div>
        <div className="flex flex-row space-x-4 mb-4">
          <TrashCounter amount={7} icon={<PaperCupIcon />} name="paper cups" />
          <TrashCounter amount={7} icon={<PaperIcon />} name="paper" />
        </div>
        <button className="bg-blue rounded-full w-20 h-20 flex justify-center items-center">
          <p className="text-white text-5xl -mt-1 font-bold">+</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
