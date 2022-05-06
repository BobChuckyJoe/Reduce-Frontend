import GraphPreview from "components/GraphPreview";
import TrashCount from "components/TrashCount";
import CanIcon from "icons/CanIcon";
import CaretIcon from "icons/CaretIcon";
import PaperCupIcon from "icons/PaperCupIcon";
import PaperIcon from "icons/PaperIcon";
import WaterBottleIcon from "icons/WaterBottleIcon";

const weeklyData = [
  [1, 196],
  [2, 200],
  [3, 208],
  [4, 192],
];

const thisWeekTotals = {
  bottles: 28,
  cans: 28,
  cups: 28,
  paper: 28,
};

const householdMembers = [
  {
    name: "John",
    amount: 28,
  },
  {
    name: "Jane",
    amount: 28,
  },
  {
    name: "Jack",
    amount: 28,
  },
  {
    name: "Jill",
    amount: 28,
  },
];

interface GroupProps {}

const Group = (props: GroupProps) => {
  return (
    <div className="p-4 w-full flex flex-col items-center">
      <div className="mb-4 flex items-center space-x-2">
        <button>
          <CaretIcon right={false} />
        </button>
        <GraphPreview labels={["Week", "Amount"]} data={weeklyData} />
        <button>
          <CaretIcon />
        </button>
      </div>
      <div className="flex flex-row space-x-4 mb-4">
        <TrashCount
          amount={thisWeekTotals.bottles}
          icon={<WaterBottleIcon />}
          name="water bottles"
        />
        <TrashCount
          amount={thisWeekTotals.cans}
          icon={<CanIcon />}
          name="cans"
        />
      </div>
      <div className="flex flex-row space-x-4 mb-4">
        <TrashCount
          amount={thisWeekTotals.cups}
          icon={<PaperCupIcon />}
          name="paper cups"
        />
        <TrashCount
          amount={thisWeekTotals.paper}
          icon={<PaperIcon />}
          name="paper"
        />
      </div>
      <div className="px-8 w-full">
        <h3 className="font-bold text-xl text-left mb-4">Members</h3>
        <div className="flex flex-col w-full rounded-2xl border-2 border-solid border-blue">
          {householdMembers.map((member) => (
            <div
              key={`member-${member.name}`}
              className="flex justify-between p-4 first:rounded-t-2xl last:rounded-b-2xl odd:bg-[#e5e5e5]"
            >
              <p>{member.name}</p>
              <p>{member.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Group;
