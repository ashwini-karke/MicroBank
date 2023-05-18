import ProfileCardField from "../../Common/ProfileCardField";
import "./styles.css";
import { useNavigate } from "react-router-dom";

interface ProfileProps {
  username: any;
  email: any;
  profileName: any;
}
export default function ProfileCard(props: ProfileProps) {
  const { username, email, profileName } = props;
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    localStorage.setItem("islogin", "0");
    navigate("/Login");
  }
  return (
    <div className="profile-card">
      <div className="profile-picture">{profileName}</div>
      <div className="profile-wrapper">
        <p className="username">{username}</p>
        <p className="email">{email}</p>
        <div>
          <p
            className="profileField"
            id="edit-profile"
            onClick={() => navigate("/EditProfile")}
          >
            Edit Profile
          </p>
          <p
            className="profileField"
            id="settings"
            onClick={() => navigate("/EditProfile")}
          >
            Settings
          </p>
          <p className="profileField" id="logout" onClick={handleLogout}>
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}
