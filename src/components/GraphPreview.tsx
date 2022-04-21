import { Chart } from "react-google-charts";

interface GraphPreviewProps {
  data: (string | number)[][];
}

const GraphPreview = ({ data }: GraphPreviewProps) => {
  return (
    <Chart
      chartType="LineChart"
      width="400px"
      height="250px"
      data={data}
      className="border-solid border-2 border-blue w-full"
      options={{
        backgroundColor: "#e5e5e5",
        legend: "none",
        colors: ["#073B4C"],
        vAxis: { gridlines: { color: "transparent" }, ticks: [] },
        hAxis: { gridlines: { color: "transparent" }, ticks: [] },
      }}
    />
  );
};

export default GraphPreview;
