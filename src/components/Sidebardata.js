export default [
  {
    text: "Dashboard",
    router: "",
    id: "dashboard",
    no: 1,
    sublist: [
      {
        text: "Account Information",
        router: "/accountInfo",
        id: "account_info",
        no: 1,
      },
      {
        text: "Dashboard",
        router: "/dashboard",
        id: "dashboard",
        no: 1,
      },
    ],
  },
  {
    text: "Management accounting",
    router: "",
    no: 2,
    id: "management_accounting",
    sublist: [
      {
        text: "Withdrawal",
        router: "/withdrawal",
        id: "withdrawl",
        no: 2,
      },
    ],
  },
  {
    text: "Report management",
    router: "",
    no: 3,
    id: "report_management",
    sublist: [
      {
        text: "Summary report",
        router: "/summary_report",
        id: "summary_report",
        no: 3,
      },
      {
        text: "Receive Payment report",
        router: "/receive_report",
        id: "receive_report",
        no: 3,
      },
      {
        text: "Payment report",
        router: "/payment_report",
        id: "payment_report",
        no: 3,
      },
      {
        text: "Manually add points report",
        router: "/manually_report",
        id: "manually_report",
        no: 3,
      },
      {
        text: "Quota modifier report",
        router: "/quota_report",
        id: "quota_report",
        no: 3,
      },
    ],
  },
  {
    text: "Chart management",
    router: "",
    no: 4,
    id: "chart_management",
    sublist: [
      {
        text: "Summary chart",
        router: "/summary_chart",
        id: "summary_chart",
        no: 4,
      },
    ],
  },
  {
    text: "System Management",
    router: "",
    no: 5,
    id: "system_management",
    sublist: [
      {
        text: "Channel information",
        router: "/channel_info",
        id: "channel_info",
        no: 5,
      },
    ],
  },
  {
    text: "Record",
    router: "",
    no: 6,
    id: "record",
    sublist: [
      {
        text: "Login record",
        router: "/login_record",
        id: "login_record",
        no: 6,
      },
      {
        text: "Interface record",
        router: "/interface_record",
        id: "interface_record",
        no: 6,
      },
      {
        text: "Order callback record",
        router: "order_record",
        id: "order_record",
        no: 6,
      },
    ],
  },
  {
    text: "Notification",
    router: "",
    no: 7,
    id: "notification",
    sublist: [
      {
        text: "Tp Bank",
        router: "/tpbank",
        id: "tpbank",
        no: 7,
      },
      {
        text: "BIDV Bank",
        router: "/bidvbank",
        id: "bidvbank",
        no: 7,
      },
    ],
  },
];
