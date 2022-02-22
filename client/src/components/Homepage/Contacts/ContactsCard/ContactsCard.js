import "./ContactsCard.css";
import { FaBirthdayCake } from "react-icons/fa";

const ContactsCard = ({ user }) => {
  const { profile } = user;
  return (
    <div className="ContactsCard">
      <img src={profile[0].profilePicture} alt="Profile"></img>
      <div>
        <div>
          <span>
            {profile[0].firstName} {profile[0].lastName}
          </span>
        </div>
        <div>
          {" "}
          <FaBirthdayCake
            size={20}
            style={{ marginRight: "5px" }}
          /> Birthday {new Date(profile[0].birthday).toDateString()}
        </div>
      </div>
    </div>
  );
};

export default ContactsCard;
