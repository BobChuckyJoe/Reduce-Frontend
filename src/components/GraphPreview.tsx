import { Chart } from "react-google-charts";

interface GraphPreviewProps {
  labels: string[];
  data: number[][];
}

const GraphPreview = ({ data, labels }: GraphPreviewProps) => {
  return (
    <div className="h-[150px] w-[300px] border-solid border-2 border-blue">
      <Chart
        chartType="LineChart"
        width="100%"
        height="100%"
        data={[labels, ...data]}
        options={{
          backgroundColor: "#ededed",
          legend: "none",
          colors: ["#89B789"],
          vAxis: {
            gridlines: { color: "transparent" },
            ticks: [],
          },
          hAxis: { gridlines: { color: "transparent" }, ticks: [] },
        }}
      />
    </div>
  );
};

export default GraphPreview;
