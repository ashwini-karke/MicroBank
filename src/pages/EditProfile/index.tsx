import DashboardNavigation from '../../Common/DashboardNavigation'
import EditProfile from '../../Components/EditProfile'
import './styles.css'
export default function EditProfilePage() {
  return (
    <div className='edit-page'>
        <DashboardNavigation/>
        <p className='edit-profile-title'>Edit Profile</p>
        <EditProfile/>
        <div className='footer'>
        © 2021 Micro Bank
        </div>
    </div>
  )
}
