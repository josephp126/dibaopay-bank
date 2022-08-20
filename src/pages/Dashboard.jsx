import React, { useEffect } from "react";
import DashboardCard from "../components/DashboardCard";
import { Grid, Card, Typography } from "@mui/material";
import DashboardLineChart from "../components/Dashboardlinechart";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import $ from "jquery";

const dashboardcarddata = [
  {
    background: "#268bd2",
    title: "Today's order",
    count: "54",
    introduction: "Today's order total",
  },
  {
    background: "#2aa198",
    title: "Today's successful",
    count: "41",
    introduction: "The total number of successful orders today",
  },
  {
    background: "#d33682",
    title: "Success rate",
    count: "100%",
    introduction: "Exclude unprocessed unit calculations",
  },
  {
    background: "#ff9800",
    title: "Success amount",
    count: "26,999,000",
    introduction: "Total amount of successful orders today",
  },
  {
    background: "#2aa198",
    title: "Yesterday's earnings",
    count: "130,971,286",
    introduction: "Today's order total",
  },
  {
    background: "#2aa198",
    title: "Today's earnings",
    count: "12,896,400",
  },
  {
    background: "#d33682",
    title: "Yesterday's balance",
    count: "56,505,654",
  },
  {
    background: "#ff9800",
    title: "Today's balance",
    count: "55,390,086",
  },
];

const Dashboard = () => {
  useEffect(() => {
    $("#sidebar_sublist_dashboard").css({
      "background-color": "#e91e63",
      "box-shadow":
        "0 4px 20px 0px inset rgba(0, 0, 0, 0.14), 0 7px 10px -5px inset rgba(233, 30, 99, 0.4)",
    });
  });
  return (
    <div className="dashboard">
      <Grid container spacing={2} padding={2}>
        {dashboardcarddata.map((data, index) => (
          <Grid item lg={3} md={6} sm={12} xs={12} key={index}>
            <DashboardCard
              background={data.background}
              title={data.title}
              count={data.count}
              introduction={data.introduction}
            />
          </Grid>
        ))}
      </Grid>
      <Card
        variant="outlined"
        sx={{ backgroundColor: "white", margin: 2, marginTop: 5, padding: 2 }}
      >
        <Typography
          sx={{ fontSize: 25, marginBottom: 4, marginLeft: 10 }}
          color="text.secondary"
          gutterBottom
        >
          Statistic chart
        </Typography>
        <InsertChartIcon
          sx={{
            position: "absolute",
            marginTop: "-116px",
            padding: "20px",
            background: "#26c6da",
            color: "white",
            borderRadius: "3px",
          }}
        />
        <DashboardLineChart />
      </Card>
    </div>
  );
};

export default Dashboard;
