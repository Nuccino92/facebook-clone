import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTimeline, updateTimeline } from "../../redux/actions/user";
import Contacts from "./Contacts/Contacts";
import "./Homepage.css";
import SideNav from "./SideNav/SideNav";
import Timeline from "./Timeline/Timeline";

const Homepage = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (user.posts.length === 0) return;
    dispatch(getUserTimeline(user._id, user.friends));
  }, [dispatch, user._id, user.friends, user.posts.length]);

  return (
    <div className="Homepage">
      <div className="Homepage-body">
        <SideNav />
        <Timeline />
        <Contacts />
      </div>
    </div>
  );
};

export default Homepage;
