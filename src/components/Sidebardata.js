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
      },
      {
        text: "Dashboard",
        router: "/dashboard",
        id: "dashboard",
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
      },
      {
        text: "Receive Payment report",
        router: "/receive_report",
        id: "receive_report",
      },
      {
        text: "Payment report",
        router: "/payment_report",
        id: "payment_report",
      },
      {
        text: "Manually add points report",
        router: "/manually_report",
        id: "manually_report",
      },
      {
        text: "Quota modifier report",
        router: "/quota_report",
        id: "quota_report",
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
      },
      {
        text: "Interface record",
        router: "/interface_record",
        id: "interface_record",
      },
      {
        text: "Order callback record",
        router: "order_record",
        id: "order_record",
      },
    ],
  },
];
