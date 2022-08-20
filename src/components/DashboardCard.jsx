import * as React from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import SellIcon from "@mui/icons-material/Sell";

const DashboardCard = (props) => {
  return (
    <div className="dashboard-card">
      <Card sx={{ background: props.background, color: "white" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14, textAlign: "end" }} gutterBottom>
            {props.title}
          </Typography>

          <Typography sx={{ mb: 1.5, textAlign: "end", fontSize: 30 }}>
            {props.count}
          </Typography>
          <Divider color="white" />
          <Typography sx={{ textAlign: "start", mt: 1 }}>
            <SellIcon />
            {props.introduction}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardCard;
