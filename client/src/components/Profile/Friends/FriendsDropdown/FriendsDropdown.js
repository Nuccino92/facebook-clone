import "./FriendsDropdown.css";
import { HiOutlineUserRemove } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFriendsRequest } from "../../../../api/user";
import { loadUser } from "../../../../redux/actions/user";
import {
  closeConversation,
  setOtherUser,
  findConversation,
} from "../../../../redux/actions/conversation";

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

  const handleMessages = () => {
    dispatch(closeConversation());
    dispatch(setOtherUser(friend));
    dispatch(findConversation(user._id, friend._id));
    setIsMyDropdownActive(false);
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
          <div onClick={handleMessages}>
            <AiOutlineMessage size={20} style={{ marginRight: "10px" }} />
            Message
          </div>
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
