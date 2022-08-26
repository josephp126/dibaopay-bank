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
    { name: "2022-08-1", withdrawalamount: 3800, receivedamount: 2400, totalamount: 6200 },
    { name: "2022-08-2", withdrawalamount: 2000, receivedamount: 2400, totalamount: 4400 },
    { name: "2022-08-3", withdrawalamount: 1500, receivedamount: 2400, totalamount: 3900 },
    { name: "2022-08-4", withdrawalamount: 1800, receivedamount: 2500, totalamount: 4300 },
    { name: "2022-08-5", withdrawalamount: 3800, receivedamount: 2400, totalamount: 6200 },
    { name: "2022-08-6", withdrawalamount: 2000, receivedamount: 1000, totalamount: 3000 },
    { name: "2022-08-7", withdrawalamount: 1000, receivedamount: 2500, totalamount: 3500 },
    { name: "2022-08-8", withdrawalamount: 1200, receivedamount: 2400, totalamount: 3600 },
    { name: "2022-08-9", withdrawalamount: 1800, receivedamount: 2400, totalamount: 4200 },
    { name: "2022-08-10", withdrawalamount: 2200, receivedamount: 1700, totalamount: 3900 },
    { name: "2022-08-11", withdrawalamount: 2800, receivedamount: 2400, totalamount: 5200 },
    { name: "2022-08-12", withdrawalamount: 2200, receivedamount: 1400, totalamount: 3600 },
    { name: "2022-08-13", withdrawalamount: 2800, receivedamount: 1700, totalamount: 3500 },
    { name: "2022-08-14", withdrawalamount: 1100, receivedamount: 1400, totalamount: 2500 },
    { name: "2022-08-15", withdrawalamount: 3000, receivedamount: 2400, totalamount: 5400 },
    { name: "2022-08-16", withdrawalamount: 2100, receivedamount: 1700, totalamount: 3800 },
    { name: "2022-08-17", withdrawalamount: 2300, receivedamount: 1700, totalamount: 4000 },
    { name: "2022-08-18", withdrawalamount: 1300, receivedamount: 1700, totalamount: 3000 },
    { name: "2022-08-19", withdrawalamount: 2300, receivedamount: 3700, totalamount: 6000 },
    { name: "2022-08-20", withdrawalamount: 1800, receivedamount: 1700, totalamount: 3500 },
    { name: "2022-08-21", withdrawalamount: 3300, receivedamount: 1300, totalamount: 4600 },
    { name: "2022-08-22", withdrawalamount: 2500, receivedamount: 1200, totalamount: 3700 },
    { name: "2022-08-23", withdrawalamount: 1500, receivedamount: 1200, totalamount: 2700 },
    { name: "2022-08-24", withdrawalamount: 2500, receivedamount: 2200, totalamount: 4700 },
    { name: "2022-08-25", withdrawalamount: 1000, receivedamount: 2000, totalamount: 3000 },
    { name: "2022-08-26", withdrawalamount: 1000, receivedamount: 1900, totalamount: 2900 },
  ];
  
  const SummaryWithdrawalChart = () => {
    return (
      <ResponsiveContainer width="100%" height={330}>
        <LineChart
          width={1300}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
            <Line
              type="monotone"
              dataKey="totalamount"
              stroke="rgb(243, 156, 18)"
              strokeWidth="3"
            />
          <Line
            type="monotone"
            dataKey="withdrawalamount"
            stroke="rgb(255, 0, 136)"
            strokeWidth="3"
          />
          <Line
            type="monotone"
            dataKey="receivedamount"
            stroke="rgb(0, 255, 0)"
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
  
  export default SummaryWithdrawalChart;
  