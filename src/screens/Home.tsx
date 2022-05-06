import GraphPreview from "components/GraphPreview";
import Projection from "components/Projection";
import TrashCounter from "components/TrashCounter";
import CanIcon from "icons/CanIcon";
import CaretIcon from "icons/CaretIcon";
import PaperCupIcon from "icons/PaperCupIcon";
import PaperIcon from "icons/PaperIcon";
import WaterBottleIcon from "icons/WaterBottleIcon";
import AddCustom from "components/AddCustom";
import MyAppBar from "components/MyAppBar";
import { ThemeProvider } from "@emotion/react";
import { theme } from "components/Theme";
import { getStatsURL } from "Endpoints";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

interface RawStatsData {
  prev_weeks: [string, number][];
  curr_week: {
    bottles: number;
    cans: number;
    cups: number;
    paper: number;
    other: number;
  };
}

const retrieveData = async () => {
  const response = await fetch(getStatsURL);
  const data: RawStatsData = await response.json();
  const weeklyTrashData = [...data.prev_weeks];
  const lastWeek = weeklyTrashData[weeklyTrashData.length - 1][1];
  const thisWeek = Object.values(data.curr_week).reduce(
    (total, typeCount) => total + typeCount,
    0
  );
  weeklyTrashData.push(["05/01", thisWeek]);
  const weekComp = (((thisWeek - lastWeek) / lastWeek) * 100).toFixed(2);
  const AVG_POUNDS_PER_YEAR = 1600;
  const BOTTLES_PER_POUND = 23;
  const ANNUAL_AVG = AVG_POUNDS_PER_YEAR * BOTTLES_PER_POUND;
  const annualComp = (() => {
    let total = 0;
    for (let i = weeklyTrashData.length - 4; i < weeklyTrashData.length; i++) {
      total += weeklyTrashData[i][1];
    }
    total *= 13;
    return (((total - ANNUAL_AVG) / ANNUAL_AVG) * 100).toFixed(2);
  })();
  return {
    weeklyTrashData,
    weekComp,
    annualComp,
    thisWeekTotals: data.curr_week,
  };
};

type StatsData = {
  weeklyTrashData: RawStatsData["prev_weeks"];
  weekComp: string;
  annualComp: string;
  thisWeekTotals: RawStatsData["curr_week"];
};

interface HomeProps {}

const Home = (props: HomeProps) => {
  const [data, setData] = useState<StatsData | null>(null);

  useEffect(() => {
    retrieveData().then(setData);
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <MyAppBar title="My Stats" />
      </ThemeProvider>
      <div className="p-4 w-full flex flex-col items-center">
        {data === null ? (
          <CircularProgress />
        ) : (
          <>
            <div className="mb-4 flex items-center space-x-2">
              <button>
                <CaretIcon right={false} />
              </button>
              <GraphPreview
                labels={["Week", "Amount"]}
                data={data.weeklyTrashData}
              />
              <button>
                <CaretIcon />
              </button>
            </div>
            <div className="flex space-x-12 mb-4">
              <Projection
                title="Weekly Comparison"
                info="Percent difference of trash produced this week compared to that of last week"
                percent={
                  parseFloat(data.weekComp) > 0
                    ? data.weekComp
                    : data.weekComp.substring(1)
                }
                increase={parseFloat(data.weekComp) > 0}
              />
              <Projection
                title="Annual Waste Projection"
                info="Percent difference of projected annual trash production when compared to that of the average annual trash production"
                percent={
                  parseFloat(data.annualComp) > 0
                    ? data.annualComp
                    : data.annualComp.substring(1)
                }
                increase={parseFloat(data.annualComp) > 0}
              />
            </div>
            <h3 className="font-bold text-xl mb-4">This week, I threw away</h3>
            <div className="flex flex-row space-x-4 mb-4">
              <TrashCounter
                amount={data.thisWeekTotals.bottles}
                icon={<WaterBottleIcon />}
                name="water bottles"
                id="bottles"
              />
              <TrashCounter
                amount={data.thisWeekTotals.cans}
                icon={<CanIcon />}
                name="cans"
                id="cans"
              />
            </div>
            <div className="flex flex-row space-x-4 mb-4">
              <TrashCounter
                amount={data.thisWeekTotals.cups}
                icon={<PaperCupIcon />}
                name="paper cups"
                id="cups"
              />
              <TrashCounter
                amount={data.thisWeekTotals.paper}
                icon={<PaperIcon />}
                name="paper"
                id="paper"
              />
            </div>
            <AddCustom amount={data.thisWeekTotals.other} />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
