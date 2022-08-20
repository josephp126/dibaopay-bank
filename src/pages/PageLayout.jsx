import Sidebar from "../components/Siderbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
const PageLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ padding: "15px 25px" }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default PageLayout;
