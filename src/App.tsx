import './App.css';
import LoginPage from './pages/LoginPage';
import CreateAccountPage from './pages/CreateAccountPage';
import ServicesComponent from './Common/ServicesComponent';
import ServicesCard from './Common/ServicesCard';
import Modal from './Common/Modal'
import ProfileCard from './Components/ProfileCard'
import DashboardNavigation from './Common/DashboardNavigation'
import Dashboard from './pages/Dashboard'
import SummaryCard from './Components/SummaryCard'
import TransactionTable from './Components/TransactionTable'
import EditProfile from './pages/EditProfile'

import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from "./pages/LoginPage"

function App() {
  return (
    <>
    <div className="App">
    </div>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/CreateAccount" element={<CreateAccountPage/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path='/EditProfile' element={<EditProfile/>}/>
      </Routes>

      </BrowserRouter>
      </>
    
  );
}

export default App;
