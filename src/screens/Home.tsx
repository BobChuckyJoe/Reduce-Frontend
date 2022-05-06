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
  [1, 840],
  [2, 849],
  [3, 840],
  [4, 860],
];

const thisWeekTotals = {
  bottles: 190,
  cans: 136,
  cups: 107,
  paper: 216,
  other: 200,
};
const thisWeek = Object.values(thisWeekTotals).reduce(
  (total, typeCount) => total + typeCount,
  0
);
data.push([5, thisWeek]);

const lastWeek = data[data.length - 2][1];
const weekComp = (((thisWeek - lastWeek) / lastWeek) * 100).toFixed(2);
const AVG_POUNDS_PER_YEAR = 1600;
const BOTTLES_PER_POUND = 23;
const ANNUAL_AVG = AVG_POUNDS_PER_YEAR * BOTTLES_PER_POUND;
const annualComp = (() => {
  let total = 0;
  for (let i = data.length - 4; i < data.length; i++) {
    total += data[i][1];
  }
  total *= 13;
  return (((total - ANNUAL_AVG) / ANNUAL_AVG) * 100).toFixed(2);
})();

interface HomeProps {}

const Home = (props: HomeProps) => {
  return (
    <div className="p-4 w-full flex flex-col items-center">
      <div className="mb-4 flex items-center space-x-2">
        <button>
          <CaretIcon right={false} />
        </button>
        <GraphPreview labels={["Week", "Amount"]} data={data} />
        <button>
          <CaretIcon />
        </button>
      </div>
      <div className="flex space-x-12 mb-4">
        <Projection
          title="Weekly Comparison"
          info="Percent difference of trash produced this week compared to that of last week"
          percent={parseFloat(weekComp) > 0 ? weekComp : weekComp.substring(1)}
          increase={parseFloat(weekComp) > 0}
        />
        <Projection
          title="Annual Waste Projection"
          info="Percent difference of projected annual trash production when compared to that of the average annual trash production"
          percent={
            parseFloat(annualComp) > 0 ? annualComp : annualComp.substring(1)
          }
          increase={parseFloat(annualComp) > 0}
        />
      </div>
      <h3 className="font-bold text-xl mb-4">This week, I threw away</h3>
      <div className="flex flex-row space-x-4 mb-4">
        <TrashCounter
          amount={thisWeekTotals.bottles}
          icon={<WaterBottleIcon />}
          name="water bottles"
        />
        <TrashCounter
          amount={thisWeekTotals.cans}
          icon={<CanIcon />}
          name="cans"
        />
      </div>
      <div className="flex flex-row space-x-4 mb-4">
        <TrashCounter
          amount={thisWeekTotals.cups}
          icon={<PaperCupIcon />}
          name="paper cups"
        />
        <TrashCounter
          amount={thisWeekTotals.paper}
          icon={<PaperIcon />}
          name="paper"
        />
      </div>
      <AddCustom amount={thisWeekTotals.other} />
    </div>
  );
};

export default Home;
