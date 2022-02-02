import "./ContactsCard.css";
import { FaBirthdayCake } from "react-icons/fa";

const ContactsCard = ({ data }) => {
  return (
    <div className="ContactsCard">
      <img src={data.picture} alt="Profile"></img>
      <div>
        <div>
          <span>{data.firstname}&nbsp;</span>
          <span> {data.lastname}</span>
        </div>
        <div>
          {" "}
          <FaBirthdayCake
            size={20}
            style={{ marginRight: "5px" }}
          /> Birthday {new Date(data.birthday).toDateString()}
        </div>
      </div>
    </div>
  );
};

export default ContactsCard;
