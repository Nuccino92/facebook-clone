import Nav from "../Nav/Nav";
import Contacts from "./Contacts/Contacts";
import "./Homepage.css";
import SideNav from "./SideNav/SideNav";
import Timeline from "./Timeline/Timeline";

const Homepage = () => {
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
