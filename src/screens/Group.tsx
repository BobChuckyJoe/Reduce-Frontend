import GraphPreview from "components/GraphPreview";
import TrashCount from "components/TrashCount";
import CanIcon from "icons/CanIcon";
import CaretIcon from "icons/CaretIcon";
import PaperCupIcon from "icons/PaperCupIcon";
import PaperIcon from "icons/PaperIcon";
import WaterBottleIcon from "icons/WaterBottleIcon";
import { CircularProgress, ThemeProvider } from "@mui/material";
import MyAppBar from "components/MyAppBar";
import { theme } from "components/Theme";
import { memberStatsURL } from "Endpoints";
import { useEffect, useState } from "react";

interface MemberStats {
  weeklyData: [string, number][];
  members: { name: string; amount: number }[];
  thisWeekTotals: {
    bottles: number;
    cans: number;
    cups: number;
    paper: number;
  };
}

const getMemberStats = async () => {
  const response = await fetch(memberStatsURL);
  const data = await response.json();
  return {
    weeklyData: data.prev_weeks,
    members: data.members,
    thisWeekTotals: data.curr_week,
  };
};

interface GroupProps {}

const Group = (props: GroupProps) => {
  const [data, setData] = useState<MemberStats | null>(null);

  useEffect(() => {
    getMemberStats().then(setData);
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <MyAppBar title="Groups" />
      </ThemeProvider>
      <div className="p-4 w-full flex flex-col items-center">
        {!data ? (
          <CircularProgress />
        ) : (
          <>
            <div className="mb-4 flex items-center space-x-2">
              <button>
                <CaretIcon right={false} />
              </button>
              <GraphPreview
                labels={["Week", "Amount"]}
                data={data.weeklyData}
              />
              <button>
                <CaretIcon />
              </button>
            </div>
            <div className="flex flex-row space-x-4 mb-4">
              <TrashCount
                amount={data.thisWeekTotals.bottles}
                icon={<WaterBottleIcon />}
                name="water bottles"
              />
              <TrashCount
                amount={data.thisWeekTotals.cans}
                icon={<CanIcon />}
                name="cans"
              />
            </div>
            <div className="flex flex-row space-x-4 mb-4">
              <TrashCount
                amount={data.thisWeekTotals.cups}
                icon={<PaperCupIcon />}
                name="paper cups"
              />
              <TrashCount
                amount={data.thisWeekTotals.paper}
                icon={<PaperIcon />}
                name="paper"
              />
            </div>
            <div className="px-8 w-full">
              <h3 className="font-bold text-xl text-left mb-4">Members</h3>
              <div className="flex flex-col w-full rounded-2xl border-2 border-solid border-blue">
                {data.members.map((member) => (
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
          </>
        )}
      </div>
    </div>
  );
};

export default Group;
