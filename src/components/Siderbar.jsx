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
  const [subFlag, setsubFlag] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMainMenu = (e, no) => {
    e.preventDefault();
    switch (no) {
      case 1: {
        $("#subMenu_dashboard").slideToggle();
        $("#icon_dashboard").append(<ArrowDropDown />);
      }
      case 2: {
      }
      case 3: {
      }
      case 4: {
      }
      case 5: {
      }
      case 6: {
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
                  <Text sx={styles.mainlist.icon} id={"icon_" + item.id}></Text>
                ) : (
                  ""
                )}
              </Box>
              <ul
                style={styles.mainlist.subListActive}
                id={"subMenu_" + item.id}
              >
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
    },
  },
};
