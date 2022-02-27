import { useSelector } from "react-redux";
import moment from "moment";
import "./Message.css";

const Message = ({ myMessage, message }) => {
  const { secondUser } = useSelector((state) => state.conversationReducer);
  return (
    <div className="Message">
      {myMessage ? (
        <div className="Message-sent">
          <p>{message.content}</p>
          <div className="time-message-sent">
            {moment(new Date(message.createdAt)).fromNow()}
          </div>
        </div>
      ) : (
        <div className="Message-recieved">
          <div>
            <img src={secondUser.profile[0].profilePicture} alt="Profile" />
            <p>{message.content}</p>
          </div>
          <h6 className="time-message-sent">
            {moment(new Date(message.createdAt)).fromNow()}
          </h6>
        </div>
      )}
    </div>
  );
};

export default Message;
