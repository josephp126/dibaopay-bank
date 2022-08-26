import React from "react";
import { saveAs } from "file-saver";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import ChannelInformationBox from "../components/ChannelInformationBox";
import ChannelInformationComponent from "../components/ChannelInformationComponent";

const styles = {
  main: {
    background: "#ec407a",
    position: "absolute",
    marginTop: "-50px",
    padding: "13px 13px 7px 15px",
    borderRadius: "4px",
  },
};
const merchantInformation = [
  { title: "purview：", value: "merchant" },
  { title: "account：", value: "VN1381" },
  { title: "amount：", value: "4505992.00" },
  { title: "Creation time：", value: "2022-06-19 20:40:41" },
];

const channelInformation = [
  { title: "Merchant ID：", value: "VN138" },
  { title: "The API key is hidden 3 days after the account is created." },
  { title: "Use state： ", value: "Active" },
  { title: "Mode： ", value: "Online" },
];

const receivePaymentSetting = [
    { title: "Payment type number：", value: "712" },
    { title: "API name：", value: "网银代付" },
    { title: "Merchant API name：", value: "网银代付" },
    { title: "percentage：", value: "Active" },
    { title: "Use state： ", value: "99.8％" },
    { title: "Minimum amount per transaction：", value: "100,000" },
    { title: "Maximum amount per transaction：", value: "100,000,000" },
    { title: "Maximum amount of the day：", value: "5,000,000,000" },
]
const dibaoCHDownload = () => {
  saveAs("../files/dibaopay.pdf", "dibaopay.pdf");
};
const dibaoENDownload = () => {
  saveAs("../files/dibaopay_en.pdf", "dibaopay_en.pdf");
};
const ChannelInformation = () => {
  return (
    <Grid container spacing={2} padding={2}>
      <Grid item sm={12}>
        <Card sx={{ background: "white" }}>
          <CardContent>
            <Box sx={styles.main}>
              <SignalCellularAltIcon
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
              Merchant Information
            </Typography>
            <Grid container spacing={6}>
              {merchantInformation.map((data, index) => (
                <Grid
                  item
                  lg={3}
                  md={6}
                  sm={12}
                  xs={12}
                  key={`merchant` + index}
                >
                  <ChannelInformationBox
                    title={data.title}
                    value={data.value}
                  />
                </Grid>
              ))}
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box
                  sx={{ borderLeft: "5px solid grey", padding: "10px 15px" }}
                >
                  Download document：
                  <Button onClick={dibaoCHDownload}>dibaopayAPI.pdf</Button>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box
                  sx={{ borderLeft: "5px solid grey", padding: "10px 15px" }}
                >
                  API Document：
                  <Button onClick={dibaoENDownload}>dibaopayAPI_EN.pdf</Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={12} sx={{ marginTop: "40px" }}>
        <Card sx={{ background: "white" }}>
          <CardContent>
            <Box sx={styles.main}>
              <SignalCellularAltIcon
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
              Channel information
            </Typography>
            <Grid container spacing={6}>
              <Grid item lg={9} md={9} sm={6} xs={12}>
                <Box
                  sx={{ borderLeft: "5px solid grey", padding: "10px 15px" }}
                >
                  API URL：https://api.dibaopay.support
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={6} xs={12}>
                <Box
                  sx={{ borderLeft: "5px solid grey", padding: "10px 15px" }}
                >
                  Merchant API Number：5102
                </Box>
              </Grid>
              {channelInformation.map((data, index) => (
                <Grid
                  item
                  lg={3}
                  md={6}
                  sm={12}
                  xs={12}
                  key={`channel` + index}
                >
                  <ChannelInformationBox
                    title={data.title}
                    value={data.value}
                  />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={12} sx={{ marginTop: "40px" }}>
        <Card sx={{ background: "white" }}>
          <CardContent>
            <Box sx={styles.main}>
              <SignalCellularAltIcon
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
              payment order setting
            </Typography>
            <Grid container spacing={6}>
              <Grid item sm={12}>
                <ChannelInformationBox
                  title="Payment Types： "
                  value="momo Pay"
                />
              </Grid>
              <ChannelInformationComponent
                title="Payment Types： "
                value="momo Pay"
                flag="momopay"
              />
              <ChannelInformationComponent flag="bankonline" />
              <ChannelInformationComponent flag="bankpay" />
              <ChannelInformationComponent flag="qrscan" />
              <ChannelInformationComponent flag="vtpay" />
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item sm={12} sx={{ marginTop: "40px" }}>
        <Card sx={{ background: "white" }}>
          <CardContent>
            <Box sx={styles.main}>
              <SignalCellularAltIcon
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
              receive payment setting
            </Typography>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <Box
                  sx={{ borderLeft: "5px solid grey", padding: "10px 15px" }}
                >
                  Payment Types： VND bank payout
                </Box>
              </Grid>
              {receivePaymentSetting.map((data, index) => (
                <Grid
                  item
                  lg={3}
                  md={6}
                  sm={12}
                  xs={12}
                  key={`channel` + index}
                >
                  <ChannelInformationBox
                    title={data.title}
                    value={data.value}
                  />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ChannelInformation;
