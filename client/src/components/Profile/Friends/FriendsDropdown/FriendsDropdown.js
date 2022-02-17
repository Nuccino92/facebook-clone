import "./FriendsDropdown.css";
import { HiOutlineUserRemove } from "react-icons/hi";

const FriendsDropdown = ({
  user,
  index,
  activeDropdown,
  handleActiveDropdown,
}) => {
  const handleClick = () => {
    console.log(user);
  };

  return (
    <div className="FriendsDropdown">
      <button onClick={() => handleActiveDropdown(index)}>...</button>
      {activeDropdown === index && (
        <div className="FriendsDropdown-active" onClick={() => handleClick()}>
          <div>
            <HiOutlineUserRemove size={20} style={{ marginRight: "10px" }} />
            Unfriend
          </div>
        </div>
      )}
    </div>
  );
};

export default FriendsDropdown;
