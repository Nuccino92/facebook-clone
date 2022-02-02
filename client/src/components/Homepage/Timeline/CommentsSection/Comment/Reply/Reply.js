import "./Reply.css";

const Reply = ({ reply, username }) => {
  const { user, userPicture, comment } = reply;
  return (
    <div className="Reply">
      <img src={userPicture} alt="Profile"></img>
      <div>
        <h4>{user}</h4>
        <p>
          <span>{username}</span> {comment}
        </p>
      </div>
    </div>
  );
};

export default Reply;
