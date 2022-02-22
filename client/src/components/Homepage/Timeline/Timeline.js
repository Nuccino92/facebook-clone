import "./Timeline.css";
import Post from "../../Post/Post";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Timeline = () => {
  const { user, timeline } = useSelector((state) => state.userReducer);

  return (
    <div className="Timeline">
      {timeline.length === 0 && (
        <div className="Timeline-empty">
          <div>
            <p>
              You have nothing in your timeline. You may like posts, add friends
              or go to your profile and create one in order to view them here.
            </p>
            <Link to={`/profile/${user._id}`}>
              <button>Profile</button>
            </Link>
          </div>
        </div>
      )}
      {timeline.map((post, index) => {
        return <Post post={post} key={index} />;
      })}
    </div>
  );
};

export default Timeline;
