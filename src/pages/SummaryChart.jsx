import React, { useState } from "react";
import {
  Grid,
  Card,
  Typography,
  Box,
  Button,
  CardContent,
  FormControl,
  NativeSelect,
  TextField,
} from "@mui/material";
import DashboardCard from "../components/DashboardCard";
import SearchIcon from "@mui/icons-material/Search";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import SummaryWithdrawalChart from "../components/SummaryWithdrawalChart";
import InsertChartIcon from "@mui/icons-material/InsertChart";

const styles = {
  main: {
    background: "#ec407a",
    position: "absolute",
    marginTop: "-50px",
    padding: "13px 13px 7px 15px",
    borderRadius: "4px",
  },
  chart: {
    background: "#26c6da",
    position: "absolute",
    marginTop: "-116px",
    padding: "12px 13px 7px 12px",
    borderRadius: "4px",
  },
};

const selectionTime = [
  { value: "interval", title: "Interval" },
  { value: "today", title: "Today" },
  { value: "lastday", title: "Last Day" },
  { value: "thisweek", title: "This Week" },
  { value: "lastweek", title: "Last Week" },
  { value: "thismonth", title: "This Month" },
  { value: "lastmonth", title: "Last Month" },
];

const dashboardcarddata = [
  {
    background: "#268bd2",
    title: "Number of orders",
    count: "20,860",
    introduction: "The total number of orders under search conditions",
  },
  {
    background: "#2aa198",
    title: "Number of successful orders",
    count: "17,640",
    introduction:
      "The total number of successful orders under search conditions",
  },
  {
    background: "#d33682",
    title: "Success rate",
    count: "98.47 %",
    introduction: "Exclude unprocessed unit calculations",
  },

  {
    background: "#ff9800",
    title: "Success amount",
    count: "52,297,566,000",
    introduction:
      "The total amount of successful orders under the search conditions",
  },
];

const SummaryChart = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [account, setAccount] = useState("");
  const handleAccount = (event) => {
    setAccount(event.target.value);
  };
  const handleStartDate = (newDate) => {
    setStartDate(newDate);
  };
  const handleEndDate = (newDate) => {
    setEndDate(newDate);
  };
  const handleSelectTime = (e) => {
    let date = new Date();
    const currentDate = e.currentTarget.value;
    switch (currentDate) {
      case "today": {
        setStartDate(
          `${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()} 00:00:00`
        );
        setEndDate(
          `${date.getFullYear()}-${
            date.getMonth() + 1
          }-${date.getDate()} 23:59:59`
        );
        break;
      }
      case "lastday": {
        setStartDate(
          `${date.getFullYear()}-${date.getMonth() + 1}-${
            date.getDate() - 1
          } 00:00:00`
        );
        setEndDate(
          `${date.getFullYear()}-${date.getMonth() + 1}-${
            date.getDate() - 1
          } 23:59:59`
        );
        break;
      }
      case "thisweek": {
        setStartDate(
          `${date.getFullYear()}-${date.getMonth() + 1}-${
            date.getDate() - date.getDay()
          } 00:00:00`
        );
        setEndDate(
          `${date.getFullYear()}-${date.getMonth() + 1}-${
            date.getDate() + 6 - date.getDay()
          } 23:59:59`
        );
        break;
      }
      case "lastweek": {
        setStartDate(
          `${date.getFullYear()}-${date.getMonth() + 1}-${
            date.getDate() - date.getDay() - 7
          } 00:00:00`
        );
        setEndDate(
          `${date.getFullYear()}-${date.getMonth() + 1}-${
            date.getDate() - 1 - date.getDay()
          } 23:59:59`
        );
        break;
      }
      case "thismonth": {
        setStartDate(
          `${date.getFullYear()}-${date.getMonth() + 1}-01 00:00:00`
        );
        setEndDate(
          `${date.getFullYear()}-${date.getMonth() + 1}-${new Date(
            date.getFullYear(),
            date.getMonth(),
            0
          ).getDate()} 23:59:59`
        );
        break;
      }
      case "lastmonth": {
        setStartDate(`${date.getFullYear()}-${date.getMonth()}-01 00:00:00`);
        setEndDate(
          `${date.getFullYear()}-${date.getMonth()}-${new Date(
            date.getFullYear(),
            date.getMonth(),
            0
          ).getDate()} 23:59:59`
        );
        break;
      }
      default:
        break;
    }
    console.log(currentDate);
  };
  return (
    <div>
      <Grid container padding={2} marginTop={4}>
        <Grid item sm={12}>
          <Card sx={{ background: "white" }}>
            <CardContent>
              <Box sx={styles.main}>
                <SearchIcon
                  sx={{
                    fontSize: "40px",
                    color: "white",
                    borderRadius: "3px",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 20,
                  color: "action.active",
                  marginLeft: "80px",
                }}
                gutterBottom
              >
                Search
              </Typography>

              <Grid container spacing={6} marginTop="-20px">
                <Grid item lg={3} md={6} sm={12} xs={12}>
                  <TextField
                    variant="standard"
                    label="account"
                    id="account"
                    value={account}
                    sx={{ width: "100%" }}
                    onChange={handleAccount}
                  />
                </Grid>
                <Grid item lg={3} md={6} sm={12} xs={12}>
                  <FormControl fullWidth>
                    selection time
                    <NativeSelect
                      defaultValue={"interval"}
                      // value={card}
                      onChange={(e) => handleSelectTime(e)}
                      variant="standard"
                      sx={{
                        border: "none",
                        width: "100%",
                      }}
                    >
                      {selectionTime.map((data, idx) => (
                        <option value={data.value} key={idx}>
                          {data.title}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                </Grid>
                <Grid item lg={3} md={6} sm={12} xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      value={startDate}
                      onChange={handleStartDate}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>

                <Grid item lg={3} md={6} sm={12} xs={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                      value={endDate}
                      onChange={handleEndDate}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </Grid>

              <Grid item lg={12} sx={{ paddingTop: "20px !important" }}>
                <Box display="flex" justifyContent="flex-end">
                  <Button
                    variant="contained"
                    sx={{ marginRight: 3, backgroundColor: "#ec407a" }}
                  >
                    CLEAR
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#00BCD4" }}
                  >
                    SEARCH
                  </Button>
                </Box>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid container spacing={2} marginTop={2}>
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
         Receipts／Withdrawals chart
        </Typography>
        <Box sx={styles.chart}>
          <InsertChartIcon
            sx={{
              fontSize: "40px",
              color: "white",
              borderRadius: "3px",
            }}
          />
        </Box>
        <SummaryWithdrawalChart />
      </Card>
      <Card
        variant="outlined"
        sx={{ backgroundColor: "white", margin: 2, marginTop: 5, padding: 2 }}
      >
        <Typography
          sx={{ fontSize: 25, marginBottom: 4, marginLeft: 10 }}
          color="text.secondary"
          gutterBottom
        >
         All orders Statistic chart
        </Typography>
        <Box sx={styles.chart}>
          <InsertChartIcon
            sx={{
              fontSize: "40px",
              color: "white",
              borderRadius: "3px",
            }}
          />
        </Box>
        <SummaryWithdrawalChart />
      </Card>
    </div>
  );
};

export default SummaryChart;
