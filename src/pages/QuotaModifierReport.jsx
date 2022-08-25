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
import ReportTable from "../components/ReportTable";
import SearchIcon from "@mui/icons-material/Search";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
const styles = {
  main: {
    background: "#ec407a",
    position: "absolute",
    marginTop: "-50px",
    padding: "13px 13px 7px 15px",
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
    background: "#ff9800",
    title: "Current balance",
    count: "17,675,084",
    introduction:
      " Get the balance of this page, please refresh the page to refresh data",
  },
];
const QuotaModifierReport = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [account, setAccount] = useState("");
  const [core_ID, setCore_ID] = useState();
  const [quota_number, setQuota_number] = useState();
  const [transaction_number, setTransaction_number] = useState();
  const [fee, setFee] = useState();

  const handleAccount = (event) => {
    setAccount(event.target.value);
  };
  const handleCoreID = (event) => {
    setCore_ID(event.target.value);
  };
  const handleQuotaNumber = (event) => {
    setQuota_number(event.target.value);
  };
  const handleTransactionNumber = (event) => {
    setTransaction_number(event.target.value);
  };
  const handleFee = (event) => {
    setFee(event.target.value);
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
            <Grid container spacing={6}>
              <Grid item sm={12}>
                <TextField
                  variant="standard"
                  label="account"
                  id="account"
                  value={account}
                  sx={{ width: "100%" }}
                  onChange={handleAccount}
                />
              </Grid>
            </Grid>
            <Grid container spacing={6} marginTop="-20px">
              <Grid item lg={3} md={6} sm={12} xs={12}>
                <TextField
                  variant="standard"
                  label="cord ID"
                  id="core_ID"
                  value={core_ID}
                  sx={{ width: "100%" }}
                  onChange={handleCoreID}
                  type="number"
                />
              </Grid>
              <Grid item lg={3} md={6} sm={12} xs={12}>
                <TextField
                  variant="standard"
                  label="Quota number"
                  id="quota_number"
                  type="number"
                  value={quota_number}
                  sx={{ width: "100%" }}
                  onChange={handleQuotaNumber}
                />
              </Grid>
              <Grid item lg={3} md={6} sm={12} xs={12}>
                <TextField
                  variant="standard"
                  label="Transaction number"
                  id="transaction_number"
                  type="number"
                  value={transaction_number}
                  sx={{ width: "100%" }}
                  onChange={handleTransactionNumber}
                />
              </Grid>

              <Grid item lg={3} md={6} sm={12} xs={12}>
                <TextField
                  variant="standard"
                  label="Order number of handling fee"
                  id="fee"
                  type="number"
                  value={fee}
                  sx={{ width: "100%" }}
                  onChange={handleFee}
                />
              </Grid>
            </Grid>
            <Grid container spacing={6} marginTop="-20px">
              <Grid item lg={2} md={4} sm={12} xs={12}>
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
              <Grid item lg={2} md={4} sm={12} xs={12}>
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
              <Grid item lg={2} md={4} sm={12} xs={12}>
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
                <Button variant="contained" sx={{ backgroundColor: "#00BCD4" }}>
                  SEARCH
                </Button>
              </Box>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid container spacing={2} marginTop={2}>
        {dashboardcarddata.map((data, index) => (
          <Grid item lg={4} md={6} sm={12} xs={12} key={index}>
            <DashboardCard
              background={data.background}
              title={data.title}
              count={data.count}
              introduction={data.introduction}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container marginTop={4}>
          <Grid item sm={12}>
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <ReportTable />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
    </Grid>
  );
};

export default QuotaModifierReport;
