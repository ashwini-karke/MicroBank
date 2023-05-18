import TransactionCategories from "../TransactionCategories"
import cross from '../../assests/Images/cross.png'
import { useState } from "react"
import './styles.css'

interface transaction{
    categoryName: string;
    categorydetails: string | number;
}
interface ModalData{
  transactionId:string,
        date:string,
        amount:string,
        status:string,
}
export default function Modal(props:ModalData) {
  const {transactionId,date,amount,status}=props;
  const [display,showModal]=useState(true)
  

  const transactionDetails: transaction[]=[
    {
        categoryName: "Transaction ID",
        categorydetails:transactionId,
    },
    {
        categoryName: "Date",
        categorydetails:date,
    },
    {
        categoryName: "Status",
        categorydetails:status,
    },
    {
        categoryName: "Comment",
        categorydetails:"Against invoice IN00021009",
    },
    {
        categoryName: "Transfer to",
        categorydetails:"XYZ corporation",
    },
    {
        categoryName: "Amount",
        categorydetails:amount,
    },
    {
        categoryName: "Action",
        categorydetails:"download",
    },
]

  function handleCross()
  {
    showModal(false)
  }
  return (
    <>
    {display &&
      <div className="transaction-details">
      <div className="modal-title">
          <p >Transaction Details</p>
          <img id='cross' onClick={handleCross} src={cross} alt="" />
      </div>
      <div className="details-card">
      {transactionDetails.map(
          (
            data: transaction,
            index: number
          ): JSX.Element => (
            <TransactionCategories
              key={index}
              categoryName={data.categoryName}
              categorydetails={data.categorydetails}
            />
          )
        )}
      </div>
    </div>
    }
    </>  
  )
}