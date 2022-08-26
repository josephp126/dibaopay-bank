import React, { useState } from "react";
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
import { ToastContainer } from "react-toastr";
import "../css/toastr.css";
import "../css/animate.css";
import axios from "axios";
import env from "react-dotenv";
import $ from "jquery";

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
  let container;
  const [oldpass, setOldpass] = useState("");
  const [newpass, setNewpass] = useState("");
  const [confirmpass, setConfirmpass] = useState("");

  const handleChangePassword = (e) => {
    e.preventDefault();
    const isLogin = props.index == "login" ? 1 : 0;
    const sendData = {
      id: localStorage.getItem("dibao_userId"),
      oldPassword: oldpass,
      newPassword: newpass,
    };
    if (oldpass == "" || newpass == "" || confirmpass == "") {
      container.error(<strong></strong>, <em>Please fill out all fields</em>, {
        closeButton: true,
        timeOut: 2000,
      });
    } else {
      if (newpass == confirmpass) {
        if (isLogin == 1) {
          axios
            .post(`${env.API_URL}/users/changeloginpassword`, sendData)
            .then((datas) => {
              if (datas.data == "success") {
                container.success(
                  <strong></strong>,
                  <em>Succesfully Changed Login Password</em>,
                  {
                    closeButton: true,
                    timeOut: 30000,
                  }
                );
              } else if (datas.data == "wrongpassword") {
                container.error(
                  <strong></strong>,
                  <em>Login original password is not correct</em>,
                  {
                    closeButton: true,
                    timeOut: 30000,
                  }
                );
              } else {
                container.error(
                  <strong></strong>,
                  <em>Login Password not changed, please try again</em>,
                  {
                    closeButton: true,
                    timeOut: 30000,
                  }
                );
              }
            });
        } else {
          axios
            .post(`${env.API_URL}/users/changewithdrawlpassword`, sendData)
            .then((datas) => {
              console.log(datas);
              if (datas.data == "success") {
                container.success(
                  <strong></strong>,
                  <em>Succesfully Changed Withdrawal Password</em>,
                  {
                    closeButton: true,
                    timeOut: 30000,
                  }
                );
              } else if (datas.data == "wrongpassword") {
                container.error(
                  <strong></strong>,
                  <em>Withdrawal original password is not correct</em>,
                  {
                    closeButton: true,
                    timeOut: 30000,
                  }
                );
              } else {
                container.error(
                  <strong></strong>,
                  <em>Withdrawal Password not changed, please try again</em>,
                  {
                    closeButton: true,
                    timeOut: 30000,
                  }
                );
              }
            });
        }
      } else {
        container.error(
          <strong></strong>,
          <em>Please confirm your new password</em>,
          {
            closeButton: true,
            timeOut: 2000,
          }
        );
      }
    }
    setTimeout(() => {
      $(".toast.animated.bounceIn").css("display", "none");
    }, 2000);
  };

  const handleSetOriginalPassword = (e) => {
    e.preventDefault();
    setOldpass(e.target.value);
  };

  const handleSetNewPassword = (e) => {
    e.preventDefault();
    setNewpass(e.target.value);
  };

  const handleSetConfirmPassword = (e) => {
    e.preventDefault();
    setConfirmpass(e.target.value);
  };

  return (
    <Box>
      <ToastContainer
        ref={(ref) => (container = ref)}
        className="toast-top-right"
      />
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
            onChange={(e) => handleSetOriginalPassword(e)}
          />
          <TextField
            label={props.new}
            name="newpassword"
            type="password"
            variant="standard"
            sx={{ width: "100%", paddingY: 1 }}
            onChange={(e) => handleSetNewPassword(e)}
          />
          <TextField
            label={props.retype}
            name="retypepassword"
            type="password"
            variant="standard"
            sx={{ width: "100%", paddingY: 1 }}
            onChange={(e) => handleSetConfirmPassword(e)}
          />
          <div className="send">
            <Button
              variant="contained"
              sx={{ backgroundColor: "#ec407a" }}
              onClick={(e) => handleChangePassword(e)}
            >
              SEND
            </Button>
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AccountInfoCard;
