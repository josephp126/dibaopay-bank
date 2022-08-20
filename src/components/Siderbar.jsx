import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import "../css/Sidebar.scss";
import sidebarData from "./Sidebardata";

const drawerWidth = 280;

export default function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="sidebar-back">
      <div className="opacity-back">
        <Toolbar className="title-tool">RR PAY CONTROL</Toolbar>
        <Divider />
        <List>
          {sidebarData.map((item, index) => (
            <ul sx={{ padding: "0px 0px" }}>
              {list.map((item, i) => (
                <li
                  key={i}
                  onClick={(e) =>
                    handleMainMenu(e, item.sublist.length, item.router)
                  }
                  sx={styles.mainlist.type}
                >
                  <Flex
                    id={"sidebar_" + item.id}
                    sx={
                      item.sublist.length == 0
                        ? styles.mainlist.aloneMenu
                        : styles.mainlist.multiMenu
                    }
                  >
                    <Text sx={styles.mainlist.icon}>{item.icon}</Text>
                    <Text sx={styles.mainlist.menuStyle}> {item.text} </Text>
                    {item.sublist.length > 0 ? (
                      <Text sx={styles.mainlist.icon}>
                        {subFlag ? item.subIconUp : item.subIconDown}
                      </Text>
                    ) : (
                      ""
                    )}
                  </Flex>
                  <ul
                    sx={
                      subFlag
                        ? styles.mainlist.subListActive
                        : styles.mainlist.subListNonActive
                    }
                  >
                    {item.sublist.map((item, i) => (
                      <li
                        id={"sidebar_" + item.text.toLowerCase()}
                        key={i}
                        onClick={() => {
                          router.push(item.router);
                        }}
                        sx={styles.mainlist.sublistType}
                      >
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          ))}
        </List>
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
          color: "white",
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
