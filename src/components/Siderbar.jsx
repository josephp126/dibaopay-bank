import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Text from "@mui/material/ListItemText";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import ArrowDropUp from "@mui/icons-material/ArrowDropUp";
import Toolbar from "@mui/material/Toolbar";
import $ from "jquery";
import "../css/Sidebar.scss";
import sidebarData from "./Sidebardata";

const drawerWidth = 300;

export default function ResponsiveDrawer(props) {
  const { window } = props;
  const router = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [subDashboardFlag, setsubDashboardFlag] = useState(true);
  const [subAccountFlag, setsubAccountFlag] = useState(true);
  const [subReportFlag, setsubReportFlag] = useState(true);
  const [subChartFlag, setsubChartFlag] = useState(true);
  const [subSystemFlag, setsubSystemFlag] = useState(true);
  const [subRecordFlag, setsubRecordFlag] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMainMenu = (e, no) => {
    e.preventDefault();
    switch (no) {
      case 1: {
        $("#icon_dashboard").html("");
        $("#subMenu_dashboard").slideToggle();
        if (subDashboardFlag == true) {
          setsubDashboardFlag(false);
          $("#icon_dashboard").append(`
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ArrowDropUpIcon"
            >
              <path d="m7 14 5-5 5 5z"></path>
            </svg>`);
        } else {
          setsubDashboardFlag(true);
          $("#icon_dashboard").append(`
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ArrowDropDownIcon"
            >
            <path d="m7 10 5 5 5-5z"></path>
          </svg>`);
        }
        $("#icon_dashboard").css("margin", "0px");
        break;
      }
      case 2: {
        $("#icon_management_accounting").html("");
        $("#subMenu_management_accounting").slideToggle();
        if (subAccountFlag == true) {
          setsubAccountFlag(false);
          $("#icon_management_accounting").append(`
            <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="ArrowDropUpIcon"
          >
            <path d="m7 14 5-5 5 5z"></path>
          </svg>`);
        } else {
          setsubAccountFlag(true);
          $("#icon_management_accounting").append(`
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ArrowDropDownIcon"
            >
            <path d="m7 10 5 5 5-5z"></path>
          </svg>`);
        }
        $("#icon_management_accounting").css("margin", "0px");
        break;
      }
      case 3: {
        $("#icon_report_management").html("");
        $("#subMenu_report_management").slideToggle();
        if (subReportFlag == true) {
          setsubReportFlag(false);
          $("#icon_report_management").append(`
            <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="ArrowDropUpIcon"
          >
            <path d="m7 14 5-5 5 5z"></path>
          </svg>`);
        } else {
          setsubReportFlag(true);
          $("#icon_report_management").append(`
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ArrowDropDownIcon"
            >
            <path d="m7 10 5 5 5-5z"></path>
          </svg>`);
        }
        $("#icon_report_management").css("margin", "0px");
        break;
      }
      case 4: {
        $("#icon_chart_management").html("");
        $("#subMenu_chart_management").slideToggle();
        if (subChartFlag == true) {
          setsubChartFlag(false);
          $("#icon_chart_management").append(`
            <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="ArrowDropUpIcon"
          >
            <path d="m7 14 5-5 5 5z"></path>
          </svg>`);
        } else {
          setsubChartFlag(true);
          $("#icon_chart_management").append(`
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ArrowDropDownIcon"
            >
            <path d="m7 10 5 5 5-5z"></path>
          </svg>`);
        }
        $("#icon_chart_management").css("margin", "0px");
        break;
      }
      case 5: {
        $("#icon_system_management").html("");
        $("#subMenu_system_management").slideToggle();
        if (subSystemFlag == true) {
          setsubSystemFlag(false);
          $("#icon_system_management").append(`
            <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="ArrowDropUpIcon"
          >
            <path d="m7 14 5-5 5 5z"></path>
          </svg>`);
        } else {
          setsubSystemFlag(true);
          $("#icon_system_management").append(`
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ArrowDropDownIcon"
            >
            <path d="m7 10 5 5 5-5z"></path>
          </svg>`);
        }
        $("#icon_system_management").css("margin", "0px");
        break;
      }
      case 6: {
        $("#icon_record").html("");
        $("#subMenu_record").slideToggle();
        if (subRecordFlag == true) {
          setsubRecordFlag(false);
          $("#icon_record").append(`
            <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="ArrowDropUpIcon"
          >
            <path d="m7 14 5-5 5 5z"></path>
          </svg>`);
        } else {
          setsubRecordFlag(true);
          $("#icon_record").append(`
            <svg
              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ArrowDropDownIcon"
            >
            <path d="m7 10 5 5 5-5z"></path>
          </svg>`);
        }
        $("#icon_record").css("margin", "0px");
        break;
      }
    }
  };

  const drawer = (
    <div className="sidebar-back">
      <div className="opacity-back">
        <Toolbar className="title-tool">RR PAY CONTROL</Toolbar>
        <Divider sx={{ borderColor: "grey !important" }} />
        <ul style={{ padding: "0px 0px" }}>
          {sidebarData.map((item, i) => (
            <li
              key={i}
              onClick={(e) => handleMainMenu(e, item.no)}
              style={styles.mainlist.type}
            >
              <Box id={"sidebar_" + item.id} sx={styles.mainlist.aloneMenu}>
                <Text sx={styles.mainlist.menuStyle}> {item.text} </Text>
                {item.sublist.length > 0 ? (
                  <Text sx={styles.mainlist.icon} id={"icon_" + item.id}>
                    <ArrowDropDown />
                  </Text>
                ) : (
                  ""
                )}
              </Box>
              <Box id={"subMenu_" + item.id} sx={styles.mainlist.subListActive}>
                <ul>
                  {item.sublist.map((item, i) => (
                    <li
                      id={"sidebar_" + item.text.toLowerCase()}
                      key={i}
                      onClick={() => {
                        router(item.router);
                      }}
                      style={styles.mainlist.sublistType}
                    >
                      <Box sx={styles.mainlist.subMenu}>{item.text}</Box>
                    </li>
                  ))}
                </ul>
              </Box>
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
          top: "20px",
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
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
        backgroundColor: "rgba(200, 200, 200, 0.2)",
        borderRadius: "4px",
        color: "white",
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
      display: "none",
    },
  },
};
