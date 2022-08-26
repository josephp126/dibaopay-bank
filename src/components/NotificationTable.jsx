import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import env from "react-dotenv";
import ErrorModal from "./ErrorModal";

const AccountInfoTable = (props) => {
  const [infoDatas, setInfoDatas] = useState([]);
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchAccountInfos();
  });

  const handleModalOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const fetchAccountInfos = async () => {
    const accountDatas = await axios.get(`${env.API_URL}/bankInfo/datas`);
    setInfoDatas(accountDatas.data);
  };

  const handleDeleteAccountData = (e, idx) => {
    e.preventDefault();
    axios.delete(`${env.API_URL}/bankInfo/delete/${idx}`).then((data) => {});
  };

  return (
    <div className="withdrawal-table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">No</TableCell>
            <TableCell align="center">Device</TableCell>
            <TableCell align="center">Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {infoDatas.map((item, i) => (
            <TableRow key={i}>
              <TableCell align="center">{item.id}</TableCell>
              <TableCell align="center">{item.device_name}</TableCell>
              <TableCell align="center">{item.message}</TableCell>
              <TableCell align="center">
                <Button
                  sx={styles.closeBtn}
                  onClick={(e) => handleDeleteAccountData(e, item.id)}
                >
                  <CloseIcon sx={styles.closeIcon} />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <ErrorModal open={open} handleClose={handleClose} value={value} />
    </div>
  );
};

export default AccountInfoTable;

const styles = {
  closeIcon: {
    color: "white",
  },
  closeBtn: {
    backgroundColor: "#f44336",
    borderRadius: "5px",
    border: "none",
    minWidth: "15px",
    "&:hover": {
      backgroundColor: "#f99306",
    },
  },
};
