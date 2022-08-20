import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "2022-08-14", uv: 3800, pv: 2400, amt: 2400 },
  { name: "2022-08-15", uv: 1800, pv: 2500, amt: 2200 },
  { name: "2022-08-16", uv: 2400, pv: 2000, amt: 2800 },
  { name: "2022-08-17", uv: 2200, pv: 1700, amt: 2100 },
  { name: "2022-08-18", uv: 2800, pv: 1700, amt: 2100 },
  { name: "2022-08-19", uv: 2100, pv: 1700, amt: 2100 },
  { name: "2022-08-20", uv: 2300, pv: 1700, amt: 2100 },
];

const DashboardLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        width={1300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line
          type="monotone"
          dataKey="uv"
          stroke="rgb(243, 156, 18)"
          strokeWidth="3"
        />
        <CartesianGrid stroke="#ccc" vertical={false} />
        <XAxis dataKey="name" stroke="rgb(0, 192, 239)" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DashboardLineChart;
