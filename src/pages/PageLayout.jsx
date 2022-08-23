import { useRef, useState, useEffect } from "react";
import Sidebar from "../components/Siderbar";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { IdleTimerProvider } from "react-idle-timer";
import env from "react-dotenv";

const PageLayout = () => {
  const idleTimerRef = useRef(null);
  const [isUserIdle, setIsUserIdle] = useState(false);
  const pathname = useLocation();
  const navigate = useNavigate();

  const userIdle = (state) => {
    setIsUserIdle(state);
    if (isUserIdle) {
      localStorage.setItem("dibao_login", "");
      navigate("/");
    }
  };

  const verifyToken = async () => {
    const verify = await axios.post(`${env.API_URL}/users/verifytoken`, {
      token: localStorage.getItem("dibao_login"),
    });
    if (verify.data != "success") {
      navigate("/");
    }
  };

  useEffect(() => {
    verifyToken();
    if (!localStorage.getItem("dibao_login")) {
      navigate("/");
    }
  });
  return (
    <IdleTimerProvider
      timeout={1800000}
      onIdle={() => userIdle(true)}
      onActive={() => userIdle(false)}
    >
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box sx={{ padding: "15px 25px", width: "100%", overflowX: "hidden" }}>
          <Navbar />
          <Outlet />
        </Box>
      </Box>
    </IdleTimerProvider>
  );
};

export default PageLayout;
