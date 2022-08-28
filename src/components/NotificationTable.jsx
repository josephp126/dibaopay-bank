import React, { useEffect, useState, useRef } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TableContainer,
  TablePagination,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import env from "react-dotenv";
import ErrorModal from "./ErrorModal";

const AccountInfoTable = (props) => {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const tableRef = useRef(null);

  useEffect(() => {
    fetchAccountInfos();
  });

  const handleModalOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const fetchAccountInfos = async () => {
    const accountDatas = await axios.get(`${env.API_URL}/bankInfo/datas`);
    setRows(accountDatas.data);
  };

  const handleDeleteAccountData = (e, idx) => {
    e.preventDefault();
    axios.delete(`${env.API_URL}/bankInfo/delete/${idx}`).then((data) => {});
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ overflow: "hidden" }}>
      <TableContainer ref={tableRef}>
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, i) => (
                <TableRow key={i}>
                  <TableCell align="center">{item.transactionId}</TableCell>
                  <TableCell align="center">{item.arrangementId}</TableCell>
                  <TableCell align="center">{item.reference}</TableCell>
                  <TableCell align="center">{item.description}</TableCell>
                  <TableCell align="center">{item.bookingDate}</TableCell>
                  <TableCell align="center">{item.valueDate}</TableCell>
                  <TableCell align="center">{item.amount}</TableCell>
                  <TableCell align="center">{item.currency}</TableCell>
                  <TableCell align="center">
                    {item.creditDebitIndicator}
                  </TableCell>
                  <TableCell align="center">{item.runningBalance}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20, 50, 100, 200]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <ErrorModal open={open} handleClose={handleClose} value={value} />
    </Paper>
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
