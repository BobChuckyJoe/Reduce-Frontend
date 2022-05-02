import GraphPreview from "components/GraphPreview";
import Projection from "components/Projection";
import TrashCounter from "components/TrashCounter";
import CanIcon from "icons/CanIcon";
import CaretIcon from "icons/CaretIcon";
import PaperCupIcon from "icons/PaperCupIcon";
import PaperIcon from "icons/PaperIcon";
import WaterBottleIcon from "icons/WaterBottleIcon";
import AddCustom from "components/AddCustom";

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
        <Projection
          title="Weekly Comparison"
          info="Percent difference of trash produced this week compared to that of last week"
          percent={15}
        />
        <Projection
          title="Annual Waste Projection"
          info="Percent difference of projected annual trash production when compared to that of the average annual trash production"
          percent={1}
        />
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
      <AddCustom />
    </div>
  );
};

export default Home;
