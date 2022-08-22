import React, { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  FormControl,
  NativeSelect,
  TextField,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import env from "react-dotenv";

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
    value: "USDT",
    title: "USDT TRC20",
  },
];

const AccountInfoTable = (props) => {
  const [bank, setBank] = useState("");
  const [nickName, setNickName] = useState("");
  const [account, setAccount] = useState("");
  const [accountName, setAccountName] = useState("");
  const [createTime, setCreateTime] = useState("");
  const [infoDatas, setInfoDatas] = useState([]);

  useEffect(() => {
    fetchAccountInfos();
  });

  const fetchAccountInfos = async () => {
    const accountDatas = await axios.get(`${env.API_URL}/accountInfo/datas`);
    setInfoDatas(accountDatas.data);
  };

  const handleBank = (event) => {
    setBank(event.target.value);
  };
  const handleNickName = (event) => {
    setNickName(event.target.value);
  };
  const handleAccount = (event) => {
    setAccount(event.target.value);
  };
  const handleAccountName = (event) => {
    setAccountName(event.target.value);
  };
  const handleCreateTime = (event) => {
    setCreateTime(event.target.value);
  };

  return (
    <div className="withdrawal-table">
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Account number</TableCell>
            <TableCell align="center">Transaction Type</TableCell>
            <TableCell align="center">Nick Name</TableCell>
            <TableCell align="center">Account</TableCell>
            <TableCell align="center">Account Name</TableCell>
            <TableCell align="center">Creation time</TableCell>
            <TableCell align="center">Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">Create</TableCell>
            <TableCell align="center">
              <FormControl fullWidth>
                <NativeSelect
                  //   defaultValue={"NONE"}
                  value={bank}
                  onChange={handleBank}
                >
                  {bankData.map((data, index) => (
                    <option key={index} value={data.value}>
                      {data.title}
                    </option>
                  ))}
                </NativeSelect>
              </FormControl>
            </TableCell>
            <TableCell align="center">
              <TextField
                hiddenLabel
                id="nick-name"
                variant="filled"
                size="small"
                placeholder="Length is 20 code"
                onChange={handleNickName}
              />
            </TableCell>
            <TableCell align="center">
              <TextField
                hiddenLabel
                id="account"
                variant="filled"
                size="small"
                placeholder="Length is 40 code"
                onChange={handleAccount}
              />
            </TableCell>
            <TableCell align="center">
              <TextField
                hiddenLabel
                id="account-name"
                variant="filled"
                size="small"
                placeholder="Length is 40 code"
                onChange={handleAccountName}
              />
            </TableCell>
            <TableCell align="center"></TableCell>
            <TableCell align="center">
              <Button color="primary" startIcon={<AddIcon />}>
                Add
              </Button>
            </TableCell>
          </TableRow>
          {infoDatas.map((item, i) => (
            <TableRow key={i}>
              <TableCell align="center">{item.id}</TableCell>
              <TableCell align="center">{item.type}</TableCell>
              <TableCell align="center">{item.nickname}</TableCell>
              <TableCell align="center">{item.account}</TableCell>
              <TableCell align="center">{item.accountName}</TableCell>
              <TableCell align="center">{item.created_at}</TableCell>
              <TableCell align="center">
                <Button>
                  <CloseIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AccountInfoTable;

const styles = {
  closeIcon: {
    backgroundColor: "#f44336",
    borderRadius: "5px",
  },
};
