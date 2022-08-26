import React from "react";
import { Divider, Grid } from "@mui/material";
import ChannelInformationBox from "./ChannelInformationBox";

const momoPay = [
  {
    title: "Payment type number: ",
    value: "923",
  },
  {
    title: "API name：",
    value: "MOMO",
  },
  {
    title: "Merchant API name：",
    value: "MOMO",
  },
  {
    title: "percentage：",
    value: "97.7%",
  },
  {
    title: "Use state：",
    value: " Active",
  },
  {
    title: "Minimum amount per transaction：",
    value: "20,000",
  },
  {
    title: "Maximum amount per transaction：",
    value: "20,000,000",
  },
  {
    title: "Maximum amount of the day：",
    value: "200,000,000",
  },
];

const bankOnline = [
  {
    title: "Payment type number: ",
    value: "907",
  },
  {
    title: "API name：",
    value: "网银直连",
  },
  {
    title: "Merchant API name：",
    value: "网银直连",
  },
  {
    title: "percentage：",
    value: "98.9％",
  },
  {
    title: "Use state：",
    value: " Active",
  },
  {
    title: "Minimum amount per transaction：",
    value: "50,000",
  },
  {
    title: "Maximum amount per transaction：",
    value: "300,000,000",
  },
  {
    title: "Maximum amount of the day：",
    value: "10,000,000,000",
  },
];

const bankPay = [
  {
    title: "Payment type number: ",
    value: "908",
  },
  {
    title: "API name：",
    value: "网银转帐",
  },
  {
    title: "Merchant API name：",
    value: "网银卡卡",
  },
  {
    title: "percentage：",
    value: "98.9％",
  },
  {
    title: "Use state：",
    value: " Active",
  },
  {
    title: "Minimum amount per transaction：",
    value: "50,000",
  },
  {
    title: "Maximum amount per transaction：",
    value: "300,000,000",
  },
  {
    title: "Maximum amount of the day：",
    value: "10,000,000,000",
  },
];

const qrScan = [
  {
    title: "Payment type number: ",
    value: "909",
  },
  {
    title: "API name：",
    value: "网银扫码",
  },
  {
    title: "Merchant API name：",
    value: "网银扫码",
  },
  {
    title: "percentage：",
    value: "98.9％",
  },
  {
    title: "Use state：",
    value: " Active",
  },
  {
    title: "Minimum amount per transaction：",
    value: "50,000",
  },
  {
    title: "Maximum amount per transaction：",
    value: "300,000,000",
  },
  {
    title: "Maximum amount of the day：",
    value: "10,000,000,000",
  },
];
const vtPay = [
  {
    title: "Payment type number: ",
    value: "925",
  },
  {
    title: "API name：",
    value: "VIETTEL",
  },
  {
    title: "Merchant API name：",
    value: "VTPAY",
  },
  {
    title: "percentage：",
    value: "97.9％",
  },
  {
    title: "Use state：",
    value: " Active",
  },
  {
    title: "Minimum amount per transaction：",
    value: "20,000",
  },
  {
    title: "Maximum amount per transaction：",
    value: "20,000,000",
  },
  {
    title: "Maximum amount of the day：",
    value: "200,000,000",
  },
];
const ChannelInformationComponent = (props) => {
  return (
    <>
      {
        props.flag == "momopay"
          ? momoPay.map((data, index) => (
              <Grid item lg={3} md={6} sm={12} xs={12} key={`momopay` + index}>
                <ChannelInformationBox title={data.title} value={data.value} />
              </Grid>
            ))
          : props.flag == "bankonline"
          ? bankOnline.map((data, index) => (
              <Grid
                item
                lg={3}
                md={6}
                sm={12}
                xs={12}
                key={`bankonline` + index}
              >
                <ChannelInformationBox title={data.title} value={data.value} />
              </Grid>
            ))
          : props.flag == "bankpay"
          ? bankPay.map((data, index) => (
              <Grid item lg={3} md={6} sm={12} xs={12} key={`bankpay` + index}>
                <ChannelInformationBox title={data.title} value={data.value} />
              </Grid>
            ))
          : props.flag == "qrscan"
          ? qrScan.map((data, index) => (
              <Grid item lg={3} md={6} sm={12} xs={12} key={`qrscan` + index}>
                <ChannelInformationBox title={data.title} value={data.value} />
              </Grid>
            ))
          : vtPay.map((data, index) => (
              <Grid item lg={3} md={6} sm={12} xs={12} key={`vtpay` + index}>
                <ChannelInformationBox title={data.title} value={data.value} />
              </Grid>
            ))
      }
      <Divider color="red" sx={{ width: "100%", margin: 2 }} />
    </>
  );
};

export default ChannelInformationComponent;
