import "./FriendsDropdown.css";
import { HiOutlineUserRemove } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFriendsRequest } from "../../../../api/user";
import { loadUser } from "../../../../redux/actions/user";

const FriendsDropdown = ({ friend }) => {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const [isMyDropdownActive, setIsMyDropdownActive] = useState(false);

  const { user } = useSelector((state) => state.userReducer);

  const handleRemoveFriend = async () => {
    await removeFromFriendsRequest(user._id, friend).then(() => {
      dispatch(loadUser());
    });
  };

  useEffect(() => {
    const checkDropdown = (e) => {
      if (
        dropdownRef.current &&
        isMyDropdownActive &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsMyDropdownActive(false);
      }
    };
    document.addEventListener("mousedown", checkDropdown);
    return () => {
      document.removeEventListener("mousedown", checkDropdown);
    };
  }, [isMyDropdownActive]);

  return (
    <div className="FriendsDropdown">
      <button onClick={() => setIsMyDropdownActive(true)}>...</button>
      {isMyDropdownActive && (
        <div ref={dropdownRef} className="FriendsDropdown-active">
          <div
            onClick={() => {
              setIsMyDropdownActive(false);
              handleRemoveFriend();
            }}
          >
            <HiOutlineUserRemove size={20} style={{ marginRight: "10px" }} />
            Unfriend
          </div>
        </div>
      )}
    </div>
  );
};

export default FriendsDropdown;
