import DashboardNavigation from "../../Common/DashboardNavigation";
import NavigationBar from "../../Components/NavigationBar";
import DashboardSummary from "../../Components/DashboardSummary";
import TransactionTable from "../../Components/TransactionTable";
import { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [id, setId] = useState("");
  const [login,setLogin]=useState(false)
  const islogin = localStorage.getItem("islogin");
  useEffect(() => {
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    if (islogin==="0") {
      navigate("/Login");
    }
  },[]);
  

  function handleDashboard(e: React.MouseEvent<HTMLElement>) {
    setId((e.target as HTMLElement).id);
    if ((e.target as HTMLElement).id === "Summary") {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }
  return (
    <div className="dashboard-wrapper">
      <DashboardNavigation />

      <div className="dashboard-content-wrapper">
        <div className="dashboard-title">Dashboard</div>
        <div className="navigation-bar">
          <NavigationBar onClick={handleDashboard} />
        </div>
        <div className="summary-wrapper">
          {toggle ? <TransactionTable /> : <DashboardSummary />}
        </div>
      </div>
      <div className="footer">© 2021 Micro Bank</div>
    </div>
  );
}
