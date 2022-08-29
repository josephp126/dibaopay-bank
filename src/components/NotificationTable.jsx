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
import DoneIcon from "@mui/icons-material/Done";
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
              <TableCell align="center">EventDate</TableCell>
              <TableCell align="center">Code GD</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Account</TableCell>
              <TableCell align="center">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, i) => (
                <TableRow key={i}>
                  <TableCell align="center">{item.when}</TableCell>
                  <TableCell align="center">{item.id}</TableCell>
                  <TableCell align="center">{item.description}</TableCell>
                  <TableCell align="center">{item.amount}</TableCell>
                  <TableCell align="center">{item.bankSubAccId}</TableCell>
                  <TableCell align="center">
                    <DoneIcon />
                  </TableCell>
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
