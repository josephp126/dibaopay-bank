import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import PageLayout from "./pages/PageLayout";
import Withdrawal from "./pages/Withdrawal";
import AccountInfo from "./pages/AccountInfo";
import SummaryReport from "./pages/SummaryReport";
import ReceivePaymentReport from "./pages/ReceivePaymentReport";
import PaymentReport from "./pages/PaymentReport";
import ManuallyReport from "./pages/ManuallyReport";
import QuotaModifierReport from "./pages/QuotaModifierReport";
import SummaryChart from "./pages/SummaryChart";
import Tpbank from "./pages/Tpbank";
import Bidvbank from "./pages/BIDVbank";
import ChannelInformation from "./pages/ChannelInformation";
import LoginRecord from "./pages/LoginRecord";
import InterfaceRecord from "./pages/InterfaceRecord";
import OrderCallbackRecord from "./pages/OrderCallbackRecord";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route element={<PageLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accountInfo" element={<AccountInfo />} />
          <Route path="/withdrawal" element={<Withdrawal />} />
          <Route path="/summary_report" element={<SummaryReport />} />
          <Route path="/receive_report" element={<ReceivePaymentReport />} />
          <Route path="/payment_report" element={<PaymentReport />} />
          <Route path="/manually_report" element={<ManuallyReport />} />
          <Route path="/quota_report" element={<QuotaModifierReport />} />
          <Route path="/summary_chart" element={<SummaryChart />} />
          <Route path="/tpbank" element={<Tpbank />} />
          <Route path="/bidvbank" element={<Bidvbank />} />
          <Route path="/channel_info" element={<ChannelInformation />} />
          <Route path="/login_record" element={<LoginRecord />} />
          <Route path="/interface_record" element={<InterfaceRecord />} />
          <Route path="/order_record" element={<OrderCallbackRecord />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
