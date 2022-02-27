import "./About.css";
import { BsPersonFill, BsGenderAmbiguous } from "react-icons/bs";
import { FaBirthdayCake, FaUserFriends } from "react-icons/fa";
import { BsCheckLg } from "react-icons/bs";
import { VscChromeClose } from "react-icons/vsc";
import { useSelector } from "react-redux";

const About = () => {
  const { myProfile, viewedUser, friends } = useSelector(
    (state) => state.viewedUserReducer
  );
  const { profile } = viewedUser;

  return (
    <div className="About">
      <h2>Intro</h2>
      <ul>
        <li>
          <div>
            <BsPersonFill size={20} />
            &#160; About me
          </div>
          <p>{profile[0].bio}</p>
        </li>
        <li>
          <div>
            <FaBirthdayCake size={20} />
            &#160; Birthday
          </div>

          <p>{new Date(profile[0].birthday).toDateString()}</p>
        </li>
        <li>
          <div>
            <BsGenderAmbiguous size={20} />
            &#160; Gender
          </div>
          <p>
            {/* capitalize first letter */}
            {profile[0].gender.charAt(0).toUpperCase() +
              profile[0].gender.slice(1)}
          </p>
        </li>
        {!myProfile && (
          <li>
            <div>
              <FaUserFriends size={20} />
              &#160; Friend Status
            </div>
            <p>
              {friends ? (
                <>
                  {" "}
                  Friends{" "}
                  <BsCheckLg
                    color="#41EC29"
                    size={22}
                    style={{ marginLeft: "10px" }}
                  />{" "}
                </>
              ) : (
                <>
                  Not friends{" "}
                  <VscChromeClose
                    color="red"
                    size={22}
                    style={{ marginLeft: "10px" }}
                  />{" "}
                </>
              )}
            </p>
          </li>
        )}
      </ul>
    </div>
  );
};
export default About;
