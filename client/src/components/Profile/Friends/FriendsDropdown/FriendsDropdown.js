import { useState } from "react";
import "./FriendsDropdown.css";

const FriendsDropdown = ({ user }) => {
  const [active, setActive] = useState(false);

  console.log(user);

  const handleChange = () => {
    setActive((prev) => {
      return !prev;
    });
  };

  return (
    <div className="FriendsDropdown">
      <button onClick={handleChange}>...</button>
    </div>
  );
};

export default FriendsDropdown;
