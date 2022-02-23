import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserTimeline } from "../../redux/actions/user";
import Contacts from "./Contacts/Contacts";
import "./Homepage.css";
import SideNav from "./SideNav/SideNav";
import Timeline from "./Timeline/Timeline";

const Homepage = () => {
  const dispatch = useDispatch();

  const { user, timelineTab } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getUserTimeline(user, user.friends, timelineTab));
  }, [dispatch, timelineTab, user]);

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
