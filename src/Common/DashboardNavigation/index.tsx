import bellImage from '../../assests/Images/Vector.png'
import profileDropdown from '../../assests/Images/profile.png'
import ProfileCard from '../../Components/ProfileCard'
import './styles.css'
import { useNavigate } from 'react-router-dom'
import {useState} from 'react'
import {connect} from 'react-redux'




export default function DashboardNavigation() {

  let [displayDropdown,setDisplaydropdown]=useState(false)
  let navigate=useNavigate()
  const username=localStorage.getItem("username")
  const email=localStorage.getItem("email")
  const profileName=localStorage.getItem("profileName")

  function handleClick(e:React.MouseEvent<HTMLElement>)
  {
    setDisplaydropdown(!displayDropdown)
    // displayDropdown? setDisplaydropdown(false):setDisplaydropdown(true)
  }

  function handleClickHome()
  {
    navigate('/Dashboard')
  }

  return (
    <div className='dashboard-navigation-wrapper'>
        <div className='left-content'>
            <p className='logo' data-testid='logo' onClick={handleClickHome}>Micro <span>Bank</span></p>
            <div className='vertical-bar'></div>
            <p className='company-name'>ABC Pvt. Ltd.</p>
        </div>
        <div className='right-content'>
        <div className='dropdown-btn-wrapper'>
            <img className='bell-img' src={bellImage} alt="BellImage" />
              <div className='dropdown' id="menu" onClick={handleClick}>
                  <div className='user-profile'>{profileName}</div>
                  <img className='profile-dropdown' src={profileDropdown} alt="Dropdown Img" />
              </div>
          </div>
          {displayDropdown ?<ProfileCard username={username} email={email} profileName={profileName}/>: ""}
        
        </div>
    </div>
  )
}

// const mapstatetoprops=(state:any)=>{
//   return{
//     userData:state.loginUserReducer.userData,
//   }
// }
// export default connect(mapstatetoprops,null)(DashboardNavigation);
 