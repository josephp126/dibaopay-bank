import React, { useState, useEffect } from "react";
import { flushSync } from "react-dom";
import { useNavigate, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Text from "@mui/material/ListItemText";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import $ from "jquery";
import "../css/Sidebar.scss";
import sidebarData from "./Sidebardata";

const drawerWidth = 300;

export default function ResponsiveDrawer(props) {
  const pathname = useLocation().pathname;
  const { window } = props;
  const router = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [subno, setSubNo] = useState(false);

  const handleDrawerToggle = () => {
    flushSync(() => {
      setMobileOpen(!mobileOpen);
    });
    $(".sidebar-sublist").css({
      "background-color": "transparent",
      "box-shadow": "none",
    });
    $(".subMenu-list").css({ display: "none" });
    switch (pathname) {
      case "/dashboard": {
        $(`#sidebar_sublist_dashboard`).css({ "background-color": "#e91e63" });
        $("#subMenu_1").css({ display: "block" });
        break;
      }
      case "/accountInfo": {
        $(`#sidebar_sublist_account_info`).css({
          "background-color": "#e91e63",
        });
        $("#subMenu_1").css({ display: "block" });
        break;
      }
      case "/withdrawal": {
        $(`#sidebar_sublist_withdrawl`).css({ "background-color": "#e91e63" });
        $("#subMenu_2").css({ display: "block" });
        break;
      }
      case "/summary_report": {
        $(`#sidebar_sublist_summary_report`).css({
          "background-color": "#e91e63",
        });
        $("#subMenu_3").css({ display: "block" });
        break;
      }
      case "/receive_report": {
        $(`#sidebar_sublist_receive_report`).css({
          "background-color": "#e91e63",
        });
        $("#subMenu_3").css({ display: "block" });
        break;
      }
      case "/payment_report": {
        $(`#sidebar_sublist_payment_report`).css({
          "background-color": "#e91e63",
        });
        break;
      }
      case "/manually_report": {
        $(`#sidebar_sublist_manually_report`).css({
          "background-color": "#e91e63",
        });
        $("#subMenu_3").css({ display: "block" });
        break;
      }
      case "/quota_report": {
        $(`#sidebar_sublist_quota_report`).css({
          "background-color": "#e91e63",
        });
        $("#subMenu_3").css({ display: "block" });
        break;
      }
      case "/summary_chart": {
        $(`#sidebar_sublist_summary_chart`).css({
          "background-color": "#e91e63",
        });
        $("#subMenu_4").css({ display: "block" });
        break;
      }
      case "/channel_info": {
        $(`#sidebar_sublist_channel_info`).css({
          "background-color": "#e91e63",
        });
        $("#subMenu_5").css({ display: "block" });
        break;
      }
      case "/login_record": {
        $(`#sidebar_sublist_login_record`).css({
          "background-color": "#e91e63",
        });
        $("#subMenu_6").css({ display: "block" });
        break;
      }
      case "/interface_record": {
        $(`#sidebar_sublist_interfact_record`).css({
          "background-color": "#e91e63",
        });
        $("#subMenu_6").css({ display: "block" });
        break;
      }
      case "/order_record": {
        $(`#sidebar_sublist_order_record`).css({
          "background-color": "#e91e63",
        });
        $("#subMenu_6").css({ display: "block" });
        break;
      }
      case "/notification_data": {
        $(`#sidebar_sublist_notification_data`).css({
          "background-color": "#e91e63",
        });
        $("#subMenu_7").css({ display: "block" });
        break;
      }
    }
  };

  const handleSublist = (e, no, link) => {
    router(link);
    e.preventDefault();
    if (mobileOpen) handleDrawerToggle(false);
    for (let i = 0; i < $(".arrow-icons").length; i++) {
      $(`#icon_${i + 1}`).html("");
      $(`#icon_${i + 1}`).append(`
        <svg
        id=arrowIcon_${i + 1}
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root arrow-icons"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="ArrowDropDownIcon"
      >
        <path d="m7 10 5 5 5-5z"></path>
      </svg>`);
    }
    $(`#icon_${no}`).html("");
    $(`#icon_${no}`).css("margin", "0px");
    $(`#icon_${no}`).append(`
      <svg
        id=arrowIcon_${no}
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root arrow-icons"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="ArrowDropUpIcon"
      >
        <path d="m7 14 5-5 5 5z"></path>
      </svg>`);
  };

  const handleMainMenu = (e, no) => {
    console.log($(`#subMenu_${no}`));
    $(`#icon_${no}`).css("margin", "0px");
    $(`#subMenu_${no}`).slideToggle();
    if ($(`#arrowIcon_${no}`)[0].dataset.testid == "ArrowDropDownIcon") {
      $(`#icon_${no}`).html("");
      $(`#icon_${no}`).append(`
      <svg
        id=arrowIcon_${no}
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root arrow-icons"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="ArrowDropUpIcon"
      >
        <path d="m7 14 5-5 5 5z"></path>
      </svg>`);
    } else {
      $(`#icon_${no}`).html(" ");
      $(`#icon_${no}`).append(`
      <svg
        id=arrowIcon_${no}
        class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root arrow-icons"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="ArrowDropDownIcon"
      >
        <path d="m7 10 5 5 5-5z"></path>
      </svg>`);
    }
  };

  useEffect(() => {
    switch (pathname) {
      case "/dashboard": {
        setSubNo(1);
        break;
      }
      case "/accountInfo": {
        setSubNo(1);
        break;
      }
      case "/withdrawal": {
        setSubNo(2);
        break;
      }
      case "/summary_report": {
        setSubNo(3);
        break;
      }
      case "/receive_report": {
        setSubNo(3);
        break;
      }
      case "/payment_report": {
        setSubNo(3);
        break;
      }
      case "/manually_report": {
        setSubNo(3);
        break;
      }
      case "/quota_report": {
        setSubNo(3);
        break;
      }
      case "/summary_chart": {
        setSubNo(4);
        break;
      }
      case "/channel_info": {
        setSubNo(5);
        break;
      }
      case "/login_record": {
        setSubNo(6);
        break;
      }
      case "/interface_record": {
        setSubNo(6);
        break;
      }
      case "/order_record": {
        setSubNo(6);
        break;
      }
      case "notification_data": {
        setSubNo(7);
        break;
      }
    }
  });

  const drawer = (
    <div className="sidebar-back">
      <div className="opacity-back">
        <Toolbar className="title-tool">RR PAY CONTROL</Toolbar>
        <Divider sx={{ borderColor: "grey !important" }} />
        <ul style={{ padding: "0px 0px" }}>
          {sidebarData.map((item, i) => (
            <li key={i} style={styles.mainlist.type}>
              <Box
                onClick={(e) => handleMainMenu(e, item.no)}
                id={"sidebar_" + item.id}
                sx={styles.mainlist.aloneMenu}
              >
                <Text sx={styles.mainlist.menuStyle}> {item.text} </Text>
                <Text
                  className="item-icons"
                  sx={styles.mainlist.icon}
                  id={"icon_" + item.no}
                >
                  {subno == item.no ? (
                    <svg
                      id={"arrowIcon_" + item.no}
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root arrow-icons"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="ArrowDropUpIcon"
                    >
                      <path d="m7 14 5-5 5 5z"></path>
                    </svg>
                  ) : (
                    <svg
                      id={"arrowIcon_" + item.no}
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root arrow-icons"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="ArrowDropDownIcon"
                    >
                      <path d="m7 10 5 5 5-5z"></path>
                    </svg>
                  )}
                </Text>
              </Box>
              <ul
                id={"subMenu_" + item.no}
                style={styles.mainlist.subListActive}
                className="subMenu-list"
              >
                {item.sublist.map((item, i) => (
                  <li
                    key={i}
                    onClick={(e) => {
                      handleSublist(e, item.no, item.router);
                    }}
                    style={styles.mainlist.sublistType}
                  >
                    <Box
                      className="sidebar-sublist"
                      id={"sidebar_sublist_" + item.id}
                      sx={styles.mainlist.subMenu}
                    >
                      {item.text}
                    </Box>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          mr: 2,
          display: { md: "none" },
          position: "fixed",
          top: "40px",
          right: "5px",
          zIndex: "100",
          color: "black",
        }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
        }}
        aria-label="mailbox folders"
      >
        {mobileOpen ? (
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", md: "none" },
              backgroundColor: "transparent",
              color: "white",
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", md: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        )}
      </Box>
    </Box>
  );
}

const styles = {
  mainlist: {
    type: {
      listStyleType: "none",
      fontWeight: 600,
      fontStyle: "normal",
      fontSize: "15px",
      lineHeight: "40px",
      borderRadius: "8px",
      cursor: "pointer",
    },
    sublistType: {
      paddingLeft: "10px",
      listStyleType: "none",
      borderRadius: "8px",
      "&:hover": {
        backgroundColor: "#5B6EF5",
        borderRadius: "8px",
        color: "white",
        fontFamily: "",
        fontWeight: "400",
      },
    },
    aloneMenu: {
      px: "8px",
      pt: "6px",
      borderRadius: "4px",
      display: "flex",
      "&:hover": {
        backgroundColor: "rgba(200, 200, 200, 0.2)",
        borderRadius: "4px",
        color: "white",
        fontWeight: "400",
      },
    },
    subMenu: {
      py: "13px",
      pl: "40px",
      borderRadius: "4px",
      lineHeight: "1.5em",
      fontWeight: "400",
      "&:hover": {
        backgroundColor: "rgba(200, 200, 200, 0.2) !important",
        borderRadius: "4px",
        color: "white",
        fontWeight: "400",
      },
    },
    menuStyle: {
      width: "100%",
      pl: "10px",
    },
    icon: {
      pt: "2px",
    },
    subListActive: {
      paddingLeft: "0px",
    },
  },
};
