import { useSelector } from "react-redux";
import "./SearchResult.css";

const SearchResult = ({ user: userData }) => {
  const { profile } = userData;

  const { user } = useSelector((state) => state.userReducer);

  return (
    <div className="SearchResult">
      <img src={profile[0].profilePicture} alt="Profile"></img>
      <div>
        <p>
          {profile[0].firstName} {profile[0].lastName}
        </p>
        {user.friends.includes(userData._id) && <h6>Friend</h6>}
        {user._id === userData._id && <h6>You</h6>}{" "}
      </div>
    </div>
  );
};

export default SearchResult;
