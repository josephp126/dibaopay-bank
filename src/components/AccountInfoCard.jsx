import * as React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const styles = {
  main: {
    background: "#ec407a",
    position: "absolute",
    marginTop: "-40px",
    padding: "12px 13px 7px 12px",
    borderRadius: "4px",
  },
};

const AccountInfoCard = (props) => {
  return (
    <div className="profile-card">
      <Card sx={{ background: "white" }}>
        <CardContent>
          <Box sx={styles.main}>
            {props.icon === "0" ? (
              <LockIcon
                sx={{
                  color: "white",
                  borderRadius: "3px",
                }}
              />
            ) : (
              <AdminPanelSettingsIcon
                sx={{
                  color: "white",
                  borderRadius: "3px",
                }}
              />
            )}
          </Box>

          <Typography
            sx={{ fontSize: 20, color: "action.active", marginLeft: "80px" }}
            gutterBottom
          >
            {props.title}
          </Typography>

          <TextField
            label={props.origin}
            name="originpassword"
            type="password"
            variant="standard"
            sx={{ width: "100%", paddingY: 1 }}
          />
          <TextField
            label={props.new}
            name="newpassword"
            type="password"
            variant="standard"
            sx={{ width: "100%", paddingY: 1 }}
          />
          <TextField
            label={props.retype}
            name="retypepassword"
            type="password"
            variant="standard"
            sx={{ width: "100%", paddingY: 1 }}
          />
          <div className="send">
            <Button variant="contained" sx={{ backgroundColor: "#ec407a" }}>
              SEND
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountInfoCard;
