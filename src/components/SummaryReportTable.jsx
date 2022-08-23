import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "transactionNumber", label: "Transaction number" },
  {
    id: "member_number",
    label: "Member`s corresponding number",
  },
  {
    id: "number",
    label: "附言",
    align: "right",
  },
  {
    id: "payment",
    label: "Payment Types",
    align: "right",
  },
  {
    id: "bank",
    label: "Bank",
    align: "right",
  },
  {
    id: "account",
    label: "Account",
    align: "right",
  },
  {
    id: "existing_amount",
    label: "Existing amount",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "actual_amount",
    label: "Actual amount",
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    align: "right",
  },
  {
    id: "create_time",
    label: "Creationg time",
    align: "right",
  },
  {
    id: "modified_time",
    label: "Modified time",
    align: "right",
  },
  {
    id: "details",
    label: "Details",
    align: "right",
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
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
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
        rowsPerPageOptions={[10, 25, 100]}
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
