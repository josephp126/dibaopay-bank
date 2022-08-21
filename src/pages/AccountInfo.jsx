import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
import React, { useEffect } from "react";
import AccountInfoCard from "../components/AccountInfoCard";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountInfoTable from "../components/AccountInfoTable";
import $ from "jquery";
import "../css/AccountInfo.scss";

const styles = {
  main: {
    background: "#ec407a",
    position: "absolute",
    marginTop: "-50px",
    padding: "12px 13px 7px 12px",
    borderRadius: "4px",
  },
};

const AccountInfo = () => {
  useEffect(() => {
    $(".sidebar-sublist").css({
      "background-color": "transparent",
      "box-shadow": "none",
    });
    $("#sidebar_sublist_account_info").css({
      "background-color": "#e91e63",
      "box-shadow":
        "0 4px 20px 0px inset rgba(0, 0, 0, 0.14), 0 7px 10px -5px inset rgba(233, 30, 99, 0.4)",
    });
  });
  return (
    <div className="account-info">
      <Grid container padding={2} spacing={5}>
        <Grid item md={6} sm={12}>
          <AccountInfoCard
            icon="0"
            title="Change Login password"
            origin="Enter original password"
            new="New password"
            retype="Retype new password"
          />
        </Grid>
        <Grid item md={6} sm={12}>
          <AccountInfoCard
            title="Change withdraw password"
            origin="Enter original settlement password"
            new="New settlement password"
            retype="Retype new settlement password"
          />
        </Grid>
      </Grid>
      <Grid container padding={2} marginTop={4}>
        <Grid item xs={12} sm={12}>
          <Card sx={{ background: "white" }}>
            <CardContent>
              <Box sx={styles.main}>
                <CreditCardIcon
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
                Withdrawal settings
              </Typography>
              <AccountInfoTable />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default AccountInfo;
