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
  Button,
  Box,
} from "@mui/material";
import axios from "axios";
import env from "react-dotenv";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import { useDownloadExcel } from "react-export-table-to-excel";

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

export default function ReportTable() {
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

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });

  return (
    <Paper sx={{ overflow: "hidden" }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          sx={{ backgroundColor: "#FF9800" }}
          onClick={onDownload}
        >
          CAN ONLY DOWNLOAD UP TO 5000 EXCEL
        </Button>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#9C27B0" }}
          onClick={onDownload}
        >
          DOWNLOAD EXCEL
        </Button>
      </Box>
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
                    <TableCell align="center" sx={{ display: "flex" }}>
                      <Button sx={styles.zoomBtn}>
                        <ZoomInIcon sx={styles.icon} />
                      </Button>
                      <Button sx={styles.codeBtn}>
                        <CodeOffIcon sx={styles.icon} />
                      </Button>
                    </TableCell>
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

const styles = {
  icon: {
    color: "white",
  },
  zoomBtn: {
    backgroundColor: "#00bcd4",
    borderRadius: "5px",
    border: "none",
    minWidth: "15px",
    "&:hover": {
      backgroundColor: "#0c8b9b",
    },
  },
  codeBtn: {
    backgroundColor: "#ff9800",
    borderRadius: "5px",
    border: "none",
    minWidth: "15px",
    "&:hover": {
      backgroundColor: "#c37809",
    },
  },
};
