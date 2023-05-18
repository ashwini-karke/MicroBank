import eyeIcon from "../../assests/Images/red-eye.png";
import download from "../../assests/Images/download.png";
import Modal from "../../Common/Modal";
import "./styles.css";
import { useState } from "react";

const tableData = [
  {
    TransactionID: "2011002039111",
    Date: "22-09-2021",
    Amount: "1,780",
    Status: "Approved",
    Action: [eyeIcon, download],
  },
  {
    TransactionID: "2011002039112",
    Date: "19-09-2021",
    Amount: "1,890",
    Status: "Approved",
    Action: [eyeIcon, download],
  },
  {
    TransactionID: "2011002039113",
    Date: "0-08-2021",
    Amount: "5,500",
    Status: "Rejected",
    Action: [eyeIcon, download],
  },
  {
    TransactionID: "2011002039114",
    Date: "2-07-2021",
    Amount: "2,590",
    Status: "Approved",
    Action: [eyeIcon, download],
  },
  {
    TransactionID: "T2011002039113",
    Date: "08-07-2021",
    Amount: "2,800",
    Status: "Rejected",
    Action: [eyeIcon, download],
  },
];

interface ModalData {
  TransactionID: string;
  Date: string;
  Amount: string;
  Status: string;
}

export default function TransactionTable() {
  const tableheader: string[] = Object.keys(tableData[0]);
  const [transactionId, setId] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const [displayDetails, setDisplay] = useState(false);

  function sendData(
    TransactionID: string,
    Date: string,
    Amount: string,
    Status: string
  ) {
    setId(TransactionID);
    setDate(Date);
    setAmount(Amount);
    setStatus(Status);
    setDisplay(!displayDetails)
    // if (displayDetails) {
    //   setDisplay(false);
    // } else {
    //   setDisplay(true);
    // }
  }

  return (
    <div className="table-wrapper">
      <table>
        <tbody>
          <tr className="table-header">
            {tableheader.map(
              (data, index: number): JSX.Element => (
                <th key={index}>{data}</th>
              )
            )}
          </tr>
          {tableData.map(
            (data, index: number): JSX.Element => (
              <tr key={index} className="table-row">
                <td>{data.TransactionID}</td>
                <td>{data.Date}</td>
                <td>{data.Amount}</td>
                <td
                  style={
                    data.Status === "Approved"
                      ? { color: "green" }
                      : { color: "red" }
                  }
                >
                  {data.Status}
                </td>
                <td>
                  <img
                    src={data.Action[0]}
                    id="eye"
                    data-testid="eye-img"
                    onClick={() =>
                      sendData(
                        data.TransactionID,
                        data.Date,
                        data.Amount,
                        data.Status
                      )
                    }
                    alt="Eye Icon"
                  />
                  <img src={data.Action[1]} alt="Download" />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      {displayDetails && (
        <Modal
          transactionId={transactionId}
          date={date}
          amount={amount}
          status={status}
        />
      )}
    </div>
  );
}
