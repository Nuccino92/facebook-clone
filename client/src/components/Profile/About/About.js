import "./About.css";
import { BsPersonFill, BsGenderAmbiguous } from "react-icons/bs";
import { FaBirthdayCake, FaUserFriends } from "react-icons/fa";

const About = () => {
  return (
    <div className="About">
      <h2>Intro</h2>
      <ul>
        <li>
          <div>
            <BsPersonFill size={20} />
            &#160; About me
          </div>
          <p>this is my bio</p>
        </li>
        <li>
          <div>
            <FaBirthdayCake size={20} />
            &#160; Birthday
          </div>
          <p>Sat Jan 01 2022 </p>
        </li>
        <li>
          <div>
            <BsGenderAmbiguous size={20} />
            &#160; Gender
          </div>
          <p>Male </p>
        </li>
        <li>
          <div>
            <FaUserFriends size={20} />
            &#160; Friend Status
          </div>
          <p>Not Friends :(</p>
        </li>
      </ul>
    </div>
  );
};
export default About;
