import Nav from "../Nav/Nav";
import Contacts from "./Contacts/Contacts";
import "./Homepage.css";
import SideNav from "./SideNav/SideNav";
import Timeline from "./Timeline/Timeline";

const Homepage = () => {
  return (
    <div className="Homepage">
      <Nav />
      <SideNav />
      <Timeline />
      <Contacts />
    </div>
  );
};

export default Homepage;
