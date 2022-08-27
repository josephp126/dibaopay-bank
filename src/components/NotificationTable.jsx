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
            <TableCell align="center">transactionId</TableCell>
            <TableCell align="center">arrangementId</TableCell>
            <TableCell align="center">reference</TableCell>
            <TableCell align="center">description</TableCell>
            <TableCell align="center">bookingDate</TableCell>
            <TableCell align="center">valueDate</TableCell>
            <TableCell align="center">amount</TableCell>
            <TableCell align="center">currency</TableCell>
            <TableCell align="center">creditDebitIndicator</TableCell>
            <TableCell align="center">runningBalance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {infoDatas.map((item, i) => (
            <TableRow key={i}>
              <TableCell align="center">{item.transactionId}</TableCell>
              <TableCell align="center">{item.arrangementId}</TableCell>
              <TableCell align="center">{item.reference}</TableCell>
              <TableCell align="center">{item.description}</TableCell>
              <TableCell align="center">{item.bookingDate}</TableCell>
              <TableCell align="center">{item.valueDate}</TableCell>
              <TableCell align="center">{item.amount}</TableCell>
              <TableCell align="center">{item.currency}</TableCell>
              <TableCell align="center">{item.creditDebitIndicator}</TableCell>
              <TableCell align="center">{item.runningBalance}</TableCell>
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
