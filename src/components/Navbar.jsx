import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppBar, Box, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "../css/Navbar.scss";

const Navbar = () => {
  const [title, setTitle] = useState("");
  const pathname = useLocation();
  useEffect(() => {
    console.log(pathname);
    switch (pathname.pathname) {
      case "/dashboard": {
        setTitle("Dashboard");
        break;
      }
      case "/accountInfo": {
        setTitle("Account Information");
        break;
      }
      case "/withdrawal": {
        setTitle("Withdrawal");
        break;
      }
      case "/summary-report": {
        setTitle("Summary Report");
        break;
      }
      case "/receive_report": {
        setTitle("Receive Payment report");
        break;
      }
      case "/payment_report": {
        setTitle("Payment report");
        break;
      }
      case "/manually_report": {
        setTitle("Manually add points report");
        break;
      }
      case "/quota_report": {
        setTitle("Quota modifier report");
        break;
      }
      case "/summary_chart": {
        setTitle("Summary Chart");
        break;
      }
      case "/dashchannel_infoboard": {
        setTitle("Channel information");
        break;
      }
      case "/login_record": {
        setTitle("Login record");
        break;
      }
      case "/interface_record": {
        setTitle("Interface record");
        break;
      }
      case "/order_record": {
        setTitle("Order Callback record");
        break;
      }
    }
  });

  return (
    <div className="navbar">
      <Box sx={{ flexGrow: 1, margin: 2, marginBottom: 5 }}>
        <AppBar
          position="static"
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <ArrowBackIosNewIcon className="previous-icon" />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: 3 }}
          >
            {title}
          </Typography>
        </AppBar>
      </Box>
    </div>
  );
};

export default Navbar;
