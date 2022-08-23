import React, {useState} from 'react';
import {
    Grid,
    Card,
    Typography,
    Box,
    Button,
    CardContent,
    FormControl,
    NativeSelect,
    TextField,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
  import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
  import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
  const styles = {
    main: {
      background: "#ec407a",
      position: "absolute",
      marginTop: "-50px",
      padding: "13px 13px 7px 15px",
      borderRadius: "4px",
    },
  };
  const bankData = [
    {
      value: "NONE",
      title: "Not selected",
    },
    {
      value: "VIB",
      title: "VIB",
    },
    {
      value: "VPB",
      title: "VPBANK(VPB)",
    },
    {
      value: "BIDV",
      title: "BIDV",
    },
    {
      value: "CTG",
      title: "VIETINBANK(CTG)",
    },
    {
      value: "SHB",
      title: "SHB",
    },
    {
      value: "ABBANK",
      title: "ABBANK",
    },
    {
      value: "AGRIB",
      title: "AGRIB",
    },
    {
      value: "VCB",
      title: "VCB",
    },
    {
      value: "TCB",
      title: "TECHCOMBANK(TCB)",
    },
    {
      value: "ACB",
      title: "ACB",
    },
    {
      value: "SCB",
      title: "SCB",
    },
    {
      value: "MB",
      title: "MB",
    },
    {
      value: "EIB",
      title: "EXIMBANK(EIB)",
    },
    {
      value: "STB",
      title: "SACOMBANK",
    },
    {
      value: "DONG",
      title: "DONG A BANK",
    },
    {
      value: "GPBANK",
      title: "GPBANK",
    },
    {
      value: "SAIGONBANK",
      title: "SAIGONBANK",
    },
    {
      value: "PGBANK",
      title: "PGBANK",
    },
    {
      value: "OCEANBANK",
      title: "OCEANBANK",
    },
    {
      value: "NAM",
      title: "NAM A BANK",
    },
    {
      value: "TPBANK",
      title: "TPBANK",
    },
    {
      value: "HDBANK",
      title: "HD BANK",
    },
    {
      value: "VIETABANK",
      title: "VIET A BANK",
    },
    {
      value: "OCB",
      title: "OCB",
    },
    {
      value: "SEABANK",
      title: "SEABANK",
    },
    {
      value: "LPB",
      title: "LienVietPostBank(LPB)",
    },
    {
      value: "MSB",
      title: "MARITIMEBANK(MSB)",
    },
    {
      value: "VIETBANK",
      title: "VIETBANK",
    },
    {
      value: "BVB",
      title: "BVB",
    },
    {
      value: "CAKE",
      title: "CAKE",
    },
    {
      value: "CBBANK",
      title: "CBBANK",
    },
    {
      value: "CIMB",
      title: "CIMB",
    },
    {
      value: "DSC",
      title: "DSC",
    },
    {
      value: "HSBC",
      title: "HSBC",
    },
    {
      value: "IVB",
      title: "IVB",
    },
    {
      value: "KIENLONGBANK",
      title: "KIEN LONG BANK",
    },
    {
      value: "NCB",
      title: "NCB",
    },
    {
      value: "PBVN",
      title: "PBVN",
    },
    {
      value: "PVCOMBANK",
      title: "PVCOMBANK",
    },
    {
      value: "VIETCAPITALBANK",
      title: "VIET CAPITAL BANK",
    },
    {
      value: "VRB",
      title: "VRB",
    },
    {
      value: "WOORI",
      title: "WOORI",
    },
    {
      value: "ZaloPay",
      title: "ZaloPay",
    },
    {
      value: "MoMo",
      title: "MoMo",
    },
    {
      value: "VTPay",
      title: "VTPay",
    },
  ];
  
  const debugData = [
    { value: "none", title: "Not selected" },
    { value: "no", title: "No" },
    { value: "yes", title: "YES" },
  ];
  
  const paymentData = [
    { value: "none", title: "Not selected" },
    { value: "VND", title: "VND bank payout" },
    { value: "online", title: "Bank online" },
    { value: "pay", title: "Bank pay" },
    { value: "QR", title: "QR scan" },
    { value: "zalo", title: "Zalo pay" },
    { value: "momo", title: "Momo pay" },
    { value: "VT", title: "VT pay" },
  ];
  
  const statusData = [
    { value: "none", title: "Not selected" },
    { value: "noprocess", title: "Not processed yet" },
    { value: "success", title: "Success" },
    { value: "processing", title: "Processing" },
    { value: "failure", title: "Failure" },
    { value: "operationfailed", title: "Operation failed" },
    { value: "failedcreate", title: "Failed to create order" },
  ];
  
  const searchmethodData = [
    { value: "create", title: "Creation time" },
    { value: "modify", title: "Modified time" },
  ];
  
  const selectiontimeData = [
    { value: "interval", title: "Interval" },
    { value: "today", title: "Today" },
    { value: "lastday", title: "Last day" },
    { value: "thisweek", title: "This week" },
    { value: "lastweek", title: "Last week" },
    { value: "thismonth", title: "This month" },
    { value: "lastmonth", title: "Last month" },
  ];
const ReportCard = () => {
    const [bank, setBank] = useState("");
    const [account, setAccount] = useState("");
    const [transaction_num, setTransaction_num] = useState();
    const [member_num, setMember_num] = useState();
    const [search_min_amount, setSearch_min_amount] = useState();
    const [search_max_amount, setSearch_max_amount] = useState();
    const [debug, setDebug] = useState("");
    const [payment, setPayment] = useState("");
    const [status, setStatus] = useState("");
    const [search_method, setSearch_method] = useState("");
    const [selection_time, setSelection_time] = useState("");
    const [start_time, setStart_time] = useState(new Date());
    const [end_time, setEnd_time] = useState(new Date());
    const handleStartTime = (startTime) => {
        setStart_time(startTime);
      };
      const handleEndTime = (endTime) => {
        setEnd_time(endTime);
      };
      const handleStatus = (e) => {
        setStatus(e.target.value);
      };
      const handleSearchMethod = (e) => {
        setSearch_method(e.target.value);
      };
      const handleSelectionTime = (e) => {
        setSelection_time(e.target.value);
      };
      const handleMinNum = (e) => {
        setSearch_min_amount(e.target.value);
      };
      const handleMaxNum = (e) => {
        setSearch_max_amount(e.target.value);
      };
      const handleDebug = (e) => {
        setDebug(e.target.value);
      };
      const handlePayment = (e) => {
        setPayment(e.target.value);
      };
      const handleBank = (event) => {
        setBank(event.target.value);
      };
      const handleTransactionNum = (event) => {
        setTransaction_num(event.target.value);
      };
      const handleAccount = (event) => {
        setAccount(event.target.value);
      };
      const handleMemberNum = (event) => {
        setMember_num(event.target.value);
      };
    return (
        <Card sx={{ background: "white" }}>
        <CardContent>
          <Box sx={styles.main}>
            <SearchIcon
              sx={{
                fontSize: "40px",
                color: "white",
                borderRadius: "3px",
              }}
            />
          </Box>

          <Typography
            sx={{
              fontSize: 20,
              color: "action.active",
              marginLeft: "80px",
            }}
            gutterBottom
          >
            Search
          </Typography>
          <Grid container spacing={6}>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <TextField
                variant="standard"
                label="account"
                id="account"
                value={account}
                sx={{ width: "100%" }}
                onChange={handleAccount}
              />
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <TextField
                variant="standard"
                label="Transaction number"
                id="transaction_num"
                type="number"
                value={transaction_num}
                sx={{ width: "100%" }}
                onChange={handleTransactionNum}
              />
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <TextField
                variant="standard"
                label="Member's corresponding number"
                id="member_num"
                value={member_num}
                sx={{ width: "100%" }}
                type="number"
                onChange={handleMemberNum}
              />
            </Grid>

            <Grid item lg={3} md={6} sm={12} xs={12}>
              <FormControl fullWidth>
                Bank
                <NativeSelect id="bank" value={bank} onChange={handleBank}>
                  {bankData.map((data, index) => (
                    <option key={index} value={data.value}>
                      {data.title}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={6} marginTop="-20px">
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <TextField
                variant="standard"
                label="Search minimum amount"
                id="search_min_amount"
                value={search_min_amount}
                sx={{ width: "100%" }}
                onChange={handleMinNum}
                type="number"
              />
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <TextField
                variant="standard"
                label="Search maximum amount"
                id="search_max_amount"
                type="number"
                value={search_max_amount}
                sx={{ width: "100%" }}
                onChange={handleMaxNum}
              />
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <FormControl fullWidth>
                Debug
                <NativeSelect
                  id="debug"
                  value={debug}
                  onChange={handleDebug}
                >
                  {debugData.map((data, index) => (
                    <option key={index} value={data.value}>
                      {data.title}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Grid>

            <Grid item lg={3} md={6} sm={12} xs={12}>
              <FormControl fullWidth>
                Payment Types
                <NativeSelect
                  id="payment"
                  value={payment}
                  onChange={handlePayment}
                >
                  {paymentData.map((data, index) => (
                    <option key={index} value={data.value}>
                      {data.title}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={6} marginTop="-20px">
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <FormControl fullWidth>
                status
                <NativeSelect
                  id="status"
                  value={status}
                  onChange={handleStatus}
                >
                  {statusData.map((data, index) => (
                    <option key={index} value={data.value}>
                      {data.title}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <FormControl fullWidth>
                Search method
                <NativeSelect
                  id="search_method"
                  value={search_method}
                  onChange={handleSearchMethod}
                >
                  {searchmethodData.map((data, index) => (
                    <option key={index} value={data.value}>
                      {data.title}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Grid>
            <Grid item lg={2} md={4} sm={12} xs={12}>
              <FormControl fullWidth>
                selection time
                <NativeSelect
                  id="selection_time"
                  value={selection_time}
                  onChange={handleSelectionTime}
                >
                  {selectiontimeData.map((data, index) => (
                    <option key={index} value={data.value}>
                      {data.title}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </Grid>
            <Grid item lg={2} md={4} sm={12} xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  id="start_time"
                  value={start_time}
                  onChange={handleStartTime}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item lg={2} md={4} sm={12} xs={12}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  id="end_time"
                  value={end_time}
                  onChange={handleEndTime}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth />
                  )}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Grid item lg={12} sx={{ paddingTop: "20px !important" }}>
            <Box display="flex" justifyContent="flex-end">
              <Button
                variant="contained"
                sx={{ marginRight: 3, backgroundColor : "#ec407a" }}
              >
                CLEAR
              </Button>
              <Button variant="contained" sx={{backgroundColor : "#00BCD4"}}>
                SEARCH
              </Button>
            </Box>
          </Grid>
        </CardContent>
      </Card>
    )
}

export default ReportCard;