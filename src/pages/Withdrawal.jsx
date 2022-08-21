import React, { useState } from "react";
import {
  Grid,
  Card,
  Typography,
  Box,
  CardContent,
  TextField,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import CampaignIcon from '@mui/icons-material/Campaign';
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const styles = {
  main: {
    background: "#ec407a",
    position: "absolute",
    marginTop: "-50px",
    padding: "12px 13px 7px 12px",
    borderRadius: "4px",
  },
};
const notificationstyle = {
    main: {
      background: "white",
      position: "absolute",
      marginTop: "-35px",
      padding: "5px 6px 0 5px",
      borderRadius: "50%",
    },
  };
const Withdrawal = () => {
  //   const [card, setCard] = useState("");
  //   const handleClick = (event) => {
  //     setCard(event.target.value);
  //   };
  const selectionTime = [
    { value: "interval", title: "Interval" },
    { value: "today", title: "Today" },
    { value: "lastday", title: "Last Day" },
    { value: "thisweek", title: "This Week" },
    { value: "lastweek", title: "Last Week" },
    { value: "thismonth", title: "This Month" },
    { value: "lastmonth", title: "Last Month" },
  ];
  const [value, setValue] = useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <div className="withdrawal" style={{ width: "100%" }}>
      <Grid container padding={2} marginTop={4}>
        <Grid item sm={12}>
          <Card sx={{ background: "white" }}>
            <CardContent>
              <Box sx={styles.main}>
                <AddIcon
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
                Apply for withdrawal
              </Typography>
              <Typography
                sx={{
                  color: "action.active",
                  marginLeft: 3,
                }}
                gutterBottom
              >
                card
              </Typography>
              <Grid container spacing={5} padding={2}>
                <Grid item lg={4} md={12}>
                  <Select
                    defaultValue="DUONGVULONG"
                    // value={card}
                    // onChange={handleClick}
                    displayEmpty
                    sx={{
                      background: "#9C27B0",
                      border: "none",
                      color: "white",
                      width: "100%",
                    }}
                  >
                    <MenuItem value="DUONGVULONG">
                      DUONGVULONG (9017041457062 - DUONGVULONG)
                    </MenuItem>
                    <MenuItem value="LENGOCGIAO">
                      LENGOCGIAO (19038113408012 - LENGOCGIAO)
                    </MenuItem>
                  </Select>
                </Grid>
                <Grid item lg={4} md={12}>
                  <TextField
                    variant="standard"
                    label="existing amount"
                    id="exist"
                    type="number"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item lg={4} md={12}>
                  <TextField
                    variant="standard"
                    label="withdraw password"
                    id="password"
                    type="password"
                    sx={{ width: "100%" }}
                  />
                </Grid>
                <Grid item lg={12} sx={{ paddingTop: "20px !important" }}>
                  <Typography
                    sx={{
                      color: "action.active",
                    }}
                    gutterBottom
                  >
                    * Existing amount 30,710,093 , withdrawable amount is
                    30,710,093
                  </Typography>
                </Grid>
                <Grid item lg={12} sx={{ paddingTop: "20px !important" }}>
                  <Box display="flex" justifyContent="flex-end">
                    <Button variant="contained" color="success">
                      SEND
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container padding={2} marginTop={4}>
        <Grid item sm={12}>
          <Card sx={{ background: "#00BCD4" }}>
            <CardContent>
              <Box sx={notificationstyle.main} >
                <PriorityHighIcon
                  sx={{
                    fontSize: "25px",
                    color: "#00BCD4",
                    borderRadius: "50% !important",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 20,
                  color: "white",
                  marginLeft: "80px",
                }}
                gutterBottom
              >
                <h3>Withdrawal rules</h3>
                <p>The minimum amount that can be withdrawn is: 100000, the withdrawal fee is charged: 0%, and the minimum amount to be kept in the platform: 0</p>
              </Typography>
            
            </CardContent>
          </Card>
        </Grid>
      </Grid>
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
              <Typography
                sx={{
                  color: "action.active",
                  marginLeft: 3,
                }}
                gutterBottom
              >
                selection time
              </Typography>
              <Grid container spacing={5} padding={2}>
                <Grid item lg={4} md={12}>
                  <Select
                    defaultValue={"interval"}
                    // value={card}
                    // onChange={handleClick}
                    displayEmpty
                    variant="standard"
                    sx={{
                      border: "none",
                      width: "100%",
                      marginTop: "16px",
                    }}
                  >
                    {selectionTime.map((data, idx) => (
                      <MenuItem value={data.value} key={idx}>
                        {data.title}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item lg={4} md={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid item lg={4} md={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => (
                        <TextField {...params} fullWidth />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>

                <Grid item lg={12} sx={{ paddingTop: "20px !important" }}>
                  <Box display="flex" justifyContent="flex-end">
                    <Button
                      variant="contained"
                      color="warning"
                      sx={{ marginRight: 2 }}
                    >
                      CLEAR
                    </Button>
                    <Button variant="contained" color="error">
                      SEARCH
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container padding={2} marginTop={4}>
        <Grid item sm={12}>
          <Card sx={{ background: "white" }}>
            <CardContent sx={{ background: "#FFA21A", margin: "5rem 1.5rem 3rem 1.5rem", borderRadius: 1}}>
              <Box sx={notificationstyle.main} >
                <CampaignIcon
                  sx={{
                    fontSize: "25px",
                    color: "#FFA21A",
                    borderRadius: "50% !important",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontSize: 20,
                  color: "white",
                  marginLeft: "80px",
                }}
                gutterBottom
              >
                
                There is no information!
              </Typography>
            
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Withdrawal;
