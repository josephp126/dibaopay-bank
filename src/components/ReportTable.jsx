import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Button,
  Box,
} from "@mui/material";

const columns = [
  { id: "transactionNumber", label: "Transaction number", align: "center" },
  {
    id: "member_number",
    label: "Member`s corresponding number",
    align: "center",
  },
  {
    id: "number",
    label: "附言",
    align: "center",
  },
  {
    id: "payment",
    label: "Payment Types",
    align: "center",
  },
  {
    id: "bank",
    label: "Bank",
    align: "center",
  },
  {
    id: "account",
    label: "Account",
    align: "center",
  },
  {
    id: "existing_amount",
    label: "Existing amount",
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "actual_amount",
    label: "Actual amount",
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    align: "center",
  },
  {
    id: "create_time",
    label: "Creation time",
    align: "center",
  },
  {
    id: "modified_time",
    label: "Modified time",
    align: "center",
  },
  {
    id: "details",
    label: "Details",
    align: "center",
  },
];

function createData(
  transactionNumber,
  member_number,
  number,
  payment,
  bank,
  account,
  existing_amount,
  actual_amount,
  status,
  create_time,
  modified_time,
  details
) {
  return {
    transactionNumber,
    member_number,
    number,
    payment,
    bank,
    account,
    existing_amount,
    actual_amount,
    status,
    create_time,
    modified_time,
    details,
  };
}

const rows = [
  createData(
    1661153688889537361,
    "DIBAOPAY21716611382998622",
    997916,
    "momo pay",
    "VID",
    "VN1381",
    "300000",
    "293100",
    "Not processed yet",
    "2022-08-22 15:34:49",
    "2022-08-22 15:34:49",
    ""
  ),
];

const style = {};

export default function SummaryReportTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ overflow: "hidden" }}>
      <Box display="flex" justifyContent="flex-end">
        <Button variant="contained" sx={{ backgroundColor: "#FF9800" }}>
          CAN ONLY DOWNLOAD UP TO 5000 EXCEL
        </Button>
        <Button variant="contained" sx={{ backgroundColor: "#9C27B0" }}>
          DOWNLOAD EXCEL
        </Button>
      </Box>
      <TableContainer sx={{ maxHeight: 440 }}>
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
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[20, 50, 100, 200]}
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
