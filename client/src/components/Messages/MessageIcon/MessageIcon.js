import "./MessageIcon.css";
import { BiMessageAltDetail } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { handleSearchCard } from "../../../redux/actions/conversation";

const MessageIcon = () => {
  const dispatch = useDispatch();
  const { searchCard } = useSelector((state) => state.conversationReducer);

  return (
    <div
      className="MessageIcon"
      onClick={() => dispatch(handleSearchCard(!searchCard))}
    >
      <BiMessageAltDetail size={25} />
    </div>
  );
};

export default MessageIcon;
