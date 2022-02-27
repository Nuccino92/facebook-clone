import { useDispatch, useSelector } from "react-redux";
import {
  closeConversation,
  findConversation,
  handleSearchCard,
  setOtherUser,
} from "../../../../redux/actions/conversation";
import "./SearchCardResult.css";

const SearchCardResult = ({ user: userData }) => {
  const dispatch = useDispatch();
  const { profile } = userData;

  const { user } = useSelector((state) => state.userReducer);

  const handleClick = async () => {
    dispatch(closeConversation());
    dispatch(setOtherUser(userData));
    dispatch(findConversation(user._id, userData._id));
    dispatch(handleSearchCard(false));
  };

  return (
    <div className="SearchCardResult" onClick={handleClick}>
      <img src={profile[0].profilePicture} alt="Profile"></img>
      <p>
        {profile[0].firstName} &#160;
        {profile[0].lastName}
      </p>
    </div>
  );
};

export default SearchCardResult;
