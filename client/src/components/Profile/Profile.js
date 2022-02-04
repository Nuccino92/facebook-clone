import Nav from "../Nav/Nav";
import "./Profile.css";
import ProfileUpper from "./ProfileUpper/ProfileUpper";

const Profile = () => {
  return (
    <div className="Profile">
      <Nav />
      <div className="Profile-body">
        <ProfileUpper />
      </div>
    </div>
  );
};
export default Profile;
