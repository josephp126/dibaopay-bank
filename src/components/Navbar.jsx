import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, userNavigate } from "react-router-dom";
import { AppBar, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PublicIcon from "@mui/icons-material/Public";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import CleanHandsRoundedIcon from "@mui/icons-material/CleanHandsRounded";
import SlideshowRoundedIcon from "@mui/icons-material/SlideshowRounded";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

import "../css/Navbar.scss";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const Navbar = () => {
  const [title, setTitle] = useState("");
  const pathname = useLocation();
  const navigate = useNavigate();
  const [items, setItems] = useState({
    itemOne: "",
    itemTwo: "",
  });
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event, symbol) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    switch (symbol) {
      case "public": {
        setItems({
          itemOne: "中文",
          itemTwo: "English",
        });
        break;
      }
      case "clean": {
        setItems({
          itemOne: "amount: 14124234",
          itemTwo: "",
        });
        break;
      }
      case "account": {
        setItems({
          itemOne: "today's income: 14124234",
          itemTwo: "",
        });
        break;
      }
      case "slide": {
        setItems({
          itemOne: localStorage.getItem("dibao_username"),
          itemTwo: "Logout",
        });
        break;
      }
    }
  };
  const handleClose = (event, text) => {
    event.preventDefault();
    if (text == "Logout") {
      localStorage.setItem("dibao_login", "");
      navigate("/");
    }
    setAnchorEl(null);
  };

  useEffect(() => {
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
      case "/summary_report": {
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
      <Grid container spacing="10">
        <Grid item xs={6}>
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
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "right" }}>
          <Button
            id="demo-customized-button-public"
            aria-controls={open ? "demo-customized-menu-public" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={(e) => handleClick(e, "public")}
            className="navbar-btn"
          >
            <PublicIcon className="navbar-btn-icon" />
          </Button>

          <Button
            id="demo-customized-button-cleanhands"
            aria-controls={open ? "demo-customized-menu-cleanhands" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={(e) => handleClick(e, "clean")}
            className="navbar-btn"
          >
            <CleanHandsRoundedIcon className="navbar-btn-icon" />
          </Button>
          <Button
            id="demo-customized-button-account"
            aria-controls={open ? "demo-customized-menu-account" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={(e) => handleClick(e, "account")}
            className="navbar-btn"
          >
            <AccountBalanceRoundedIcon className="navbar-btn-icon" />
          </Button>
          <Button
            id="demo-customized-button-slide"
            aria-controls={open ? "demo-customized-menu-slide" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={(e) => handleClick(e, "slide")}
            className="navbar-btn"
          >
            <SlideshowRoundedIcon className="navbar-btn-icon" />
          </Button>
          <StyledMenu
            id="demo-customized-menu-public"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button-public",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              {items.itemOne}
            </MenuItem>
            <MenuItem
              onClick={(e) => handleClose(e, items.itemTwo)}
              disableRipple
              sx={items.itemTwo ? styles.mainItem : styles.zeroItem}
            >
              {items.itemTwo}
            </MenuItem>
          </StyledMenu>
        </Grid>
      </Grid>
    </div>
  );
};

export default Navbar;

const styles = {
  mainItem: {},
  zeroItem: {
    padding: "0px",
  },
};
