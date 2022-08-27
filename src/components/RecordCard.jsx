import React, { useState } from "react";
import {
  Grid,
  Card,
  Box,
  CardContent,
  Typography,
  TextField,
  NativeSelect,
  FormControl,
  Button,
} from "@mui/material";
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

const statusData = [
  { value: "none", title: "Not selected" },
  { value: "success", title: "Login success" },
  { value: "false", title: "Login false" },
  { value: "relogin", title: "ReLogin" },
  { value: "falseip", title: "False IP" },
];
const RecordCard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [account, setAccount] = useState("");
  const [memberID, setMemberID] = useState("");
  const [status, setStatus] = useState("");
  const handleStatus = (e) => {
    setStatus(e.target.value);
  };
  const handleMemberID = (e) => {
    setMemberID(e.target.value);
  };
  const handleAccount = (event) => {
    setAccount(event.target.value);
  };
  const handleStartDate = (newDate) => {
    setStartDate(newDate);
  };
  const handleEndDate = (newDate) => {
    setEndDate(newDate);
  };
  const handleClear = () => {
    setAccount("");
    setMemberID("");
    setStatus("");
    setStartDate(new Date());
    setEndDate(new Date());
    
  }
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
          <Grid item lg={2} md={4} sm={6} xs={12}>
            <TextField
              variant="standard"
              label="account"
              id="account"
              value={account}
              sx={{ width: "100%" }}
              onChange={handleAccount}
            />
          </Grid>
          <Grid item lg={2} md={4} sm={6} xs={12}>
            <TextField
              variant="standard"
              label="memberID"
              id="memberID"
              type="number"
              value={memberID}
              sx={{ width: "100%" }}
              onChange={handleMemberID}
            />
          </Grid>
          <Grid item lg={2} md={4} sm={6} xs={12}>
            <FormControl fullWidth>
              status
              <NativeSelect id="status" value={status} onChange={handleStatus}>
                {statusData.map((data, index) => (
                  <option key={index} value={data.value}>
                    {data.title}
                  </option>
                ))}
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item lg={2} md={4} sm={6} xs={12}>
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
          <Grid item lg={2} md={4} sm={6} xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                value={startDate}
                onChange={handleStartDate}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item lg={2} md={4} sm={6} xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                value={endDate}
                onChange={handleEndDate}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>

        <Grid item lg={12} sx={{ paddingTop: "20px !important" }}>
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              onClick={handleClear}
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
  );
};

export default RecordCard;
