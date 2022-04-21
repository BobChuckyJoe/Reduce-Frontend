import { Chart } from "react-google-charts";

interface GraphPreviewProps {
  data: (string | number)[][];
}

const GraphPreview = ({ data }: GraphPreviewProps) => {
  return (
    <div className="h-[150px] w-[300px] border-solid border-2 border-blue">
      <Chart
        chartType="LineChart"
        width="100%"
        height="100%"
        data={data}
        options={{
          backgroundColor: "#e5e5e5",
          legend: "none",
          colors: ["#073B4C"],
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
