import "./MessageCard.css";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import Message from "./Message/Message";
import { useDispatch, useSelector } from "react-redux";
import { closeConversation } from "../../../redux/actions/conversation";
import { getMessages, sendMessage } from "../../../api/message";
import { io } from "socket.io-client";

let socket;
const CONNECTION_PORT = "https://facebook-clone-production.up.railway.app/";

const MessageCard = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const scrollRef = useRef();

  const { user } = useSelector((state) => state.userReducer);
  const { secondUser, activeConversation } = useSelector(
    (state) => state.conversationReducer
  );

  const [message, setMessage] = useState({
    conversation: activeConversation._id,
    sender: user._id,
    content: null,
  });

  // holds the socket emitted message
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const [messages, setMessages] = useState([]);

  const handleCloseConversation = () => {
    dispatch(closeConversation());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setMessage((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.content === null) return;

    setMessage((prev) => {
      return {
        ...prev,
        content: null,
      };
    });

    // send message is an api call
    await sendMessage(message);

    const res = await getMessages(activeConversation._id);
    setMessages(res.data);
    inputRef.current.value = "";

    const receiverId = activeConversation.users.find(
      (user) => user !== user._id
    );

    socket.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      content: message.content,
    });
  };

  useEffect(() => {
    const getConversationMessages = async () => {
      const res = await getMessages(activeConversation._id);
      setMessages(res.data);
    };
    getConversationMessages();
  }, [activeConversation._id]);

  // focuses on input
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // scrolls to the bottom of messages
  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  // if arrival message and inside correct conversation, update conversation messages
  useEffect(() => {
    arrivalMessage &&
      activeConversation?.users.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [activeConversation, arrivalMessage]);

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, []);

  useEffect(() => {
    socket.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        content: data.content,
        createdAt: Date.now(),
      });
    });
  }, []);

  return (
    <div className="MessageCard">
      <header>
        <div>
          <img src={secondUser.profile[0].profilePicture} alt="Profile" />
          <h4>
            {secondUser.profile[0].firstName} {secondUser.profile[0].lastName}
          </h4>
        </div>
        <AiOutlineClose
          size={20}
          title={"Close tab"}
          style={{ color: "grey" }}
          onClick={handleCloseConversation}
        />
      </header>
      <div className="MessageCard-body">
        <header>
          <img src={secondUser.profile[0].profilePicture} alt="Profile" />
          <h4>
            {secondUser.profile[0].firstName} {secondUser.profile[0].lastName}
          </h4>
        </header>
        <div className="MessageCard-body-content">
          {messages.map((message, index) => {
            return (
              <div ref={scrollRef} key={index}>
                <Message
                  key={index}
                  message={message}
                  myMessage={message.sender === user._id}
                />
              </div>
            );
          })}
        </div>
      </div>
      <footer>
        <img src={user.profile[0].profilePicture} alt="Profile" />
        <input ref={inputRef} name="content" onChange={handleChange} />
        <button onClick={handleSubmit}>Send</button>
      </footer>
    </div>
  );
};

export default MessageCard;
