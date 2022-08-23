import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import PublicIcon from "@mui/icons-material/Public";
import {
  Typography,
  Button,
  TextField,
  Box,
  Container,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import env from "react-dotenv";
import "../css/Signin.scss";
import ErrorModal from "../components/ErrorModal";

const SignIn = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = async () => {
    const user = await axios.post(`${env.API_URL}/users/login`, {
      data: { name: account, password: password },
    });

    if (user.data !== "invalid user") {
      localStorage.setItem("dibao_login", user.data.token);
      localStorage.setItem("dibao_username", user.data.name);
      localStorage.setItem("dibao_userId", user.data.id);
      navigate("/dashboard");
    }

  

    if (account === "") {
      setValue("Account is not entered");
    } else if (password === "") {
      setValue("Password is not entered");
    } else {
      setValue("Incorrect Account or Password");
    }

    handleModalOpen();
  };

  const handleModalOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <div className="signin">
      <Container maxWidth="xs" sx={{ paddingTop: "23vh" }}>
        <Box className="pay-title">DiBao Pay Control</Box>
        <Box
          sx={{
            bgcolor: "white",
            height: "320px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          <Typography
            align="center"
            paddingTop="52px"
            paddingBottom="20px"
            color="action.active"
          >
            Please login first
          </Typography>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PersonIcon
              sx={{ color: "action.active", mr: 1, my: 0.5, ml: 3 }}
            />
            <TextField
              id="account"
              label="account"
              name="account"
              defaultValue={account}
              onChange={(event) => {
                setAccount(event.target.value);
              }}
              variant="standard"
              sx={{ width: "75%" }}
            />
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "flex-end", marginTop: "30px" }}
          >
            <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5, ml: 3 }} />
            <TextField
              id="password"
              label="password"
              name="password"
              type="password"
              defaultValue={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              autoComplete="current-password"
              variant="standard"
              sx={{ width: "75%" }}
            />
          </Box>
          <Button
            variant="text"
            sx={{ marginTop: "38px", paddingX: "80px" }}
            type="submit"
            onClick={handleOpen}
          >
            Login
          </Button>
        </Box>
        <ErrorModal open={open} handleClose={handleClose} value={value} />
      </Container>
      <Container maxWidth="xs" sx={{ paddingTop: "10vh" }}>
        <Box
          sx={{
            bgcolor: "white",
            height: "78px",
            borderRadius: "10px",
            textAlign: "center",
            paddingTop: "10px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <PublicIcon
              sx={{ color: "action.active", mr: 1, my: 0.5, ml: 3 }}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Language</InputLabel>
              <Select
                id="input-with-sx"
                label="English"
                variant="standard"
                sx={{ width: "90%" }}
              >
                <MenuItem value={10}>English</MenuItem>
                <MenuItem value={20}>Chinese</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default SignIn;
