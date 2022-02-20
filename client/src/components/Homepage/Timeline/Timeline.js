import "./Timeline.css";
import Post from "../../Post/Post";
import { useSelector } from "react-redux";

const Timeline = () => {
  const { timeline } = useSelector((state) => state.userReducer);

  return (
    <div className="Timeline">
      {timeline.map((post, index) => {
        return <Post post={post} key={index} />;
      })}
    </div>
  );
};

export default Timeline;
