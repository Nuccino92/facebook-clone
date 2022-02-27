import "./Messages.css";
import MessageIcon from "./MessageIcon/MessageIcon";
import SearchCard from "./SearchCard/SearchCard";
import MessageCard from "./MessageCard/MessageCard";
import { useSelector } from "react-redux";

const Messages = () => {
  const { activeConversation, searchCard } = useSelector(
    (state) => state.conversationReducer
  );

  return (
    <div className="Messages">
      {activeConversation && <MessageCard />}
      {searchCard && <SearchCard />}
      <MessageIcon />
    </div>
  );
};

export default Messages;
