import React, { useEffect, useState, useRef } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import axios from "axios";
import env from "react-dotenv";

const columns = [
  { id: "record_number", label: "record number", align: "center" },
  {
    id: "member_ID",
    label: "member ID",
    align: "center",
  },
  {
    id: "account",
    label: "account",
    align: "center",
  },
  {
    id: "ip",
    label: "IP",
    align: "center",
  },
  {
    id: "country",
    label: "country",
    align: "center",
  },
  {
    id: "city",
    label: "city",
    align: "center",
  },
  {
    id: "area",
    label: "area",
    align: "center",
  },
  {
    id: "telecommunications",
    label: "telecommunications",
    align: "center",
  },
  {
    id: "token",
    label: "Token",
    align: "center",
  },
  {
    id: "status",
    label: "status",
    align: "center",
  },
  {
    id: "creation_time",
    label: "Creation time",
    align: "center",
  },
];

export default function RecordTable() {
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const tableRef = useRef(null);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    const datas = await axios.get(`${env.API_URL}/report/datas`);
    setRows(datas.data);
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
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                    <TableCell align="center">{item.transaction_num}</TableCell>
                    <TableCell align="center">{item.member_num}</TableCell>
                    <TableCell align="center">{item.postScript}</TableCell>
                    <TableCell align="center">{item.payment_type}</TableCell>
                    <TableCell align="center">{item.bank}</TableCell>
                    <TableCell align="center">{item.account}</TableCell>
                    <TableCell align="center">{item.existing_amount}</TableCell>
                    <TableCell align="center">{item.actual_amount}</TableCell>
                    <TableCell align="center">{item.status}</TableCell>
                    <TableCell align="center">{item.created_at}</TableCell>
                    <TableCell align="center">{item.modified_at}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 50, 100, 200]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

