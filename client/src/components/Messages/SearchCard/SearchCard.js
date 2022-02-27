import "./SearchCard.css";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { getFriendsInfoRequest } from "../../../api/user";
import { useDispatch, useSelector } from "react-redux";
import SearchCardResult from "./SearchCardResult/SearchCardResult";
import {
  closeConversation,
  handleSearchCard,
} from "../../../redux/actions/conversation";

const SearchCard = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.userReducer);

  const [listOfUsers, setListOfUsers] = useState([]);
  const [filteredData, setFitleredData] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const res = await getFriendsInfoRequest(user._id, user.friends);
      setListOfUsers(res.data);
    };
    getList();
  }, [user._id, user.friends]);

  const handleFilter = (e) => {
    const word = e.target.value;

    const newFilter = listOfUsers.filter((user) => {
      return (
        user.profile[0].firstName.toLowerCase().includes(word.toLowerCase()) ||
        user.profile[0].lastName.toLowerCase().includes(word.toLowerCase())
      );
    });

    word === "" ? setFitleredData([]) : setFitleredData(newFilter);
  };

  const handleCloseCard = () => {
    dispatch(closeConversation());
    dispatch(handleSearchCard(false));
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="SearchCard">
      <header>
        <h4>New message</h4>{" "}
        <AiOutlineClose
          size={20}
          title={"Close tab"}
          style={{ color: "grey" }}
          onClick={handleCloseCard}
        />
      </header>
      <div className="SearchCard-query-container">
        <label htmlFor="to">To:</label>
        <div>
          <input ref={inputRef} name="to" onChange={handleFilter}></input>
        </div>
      </div>
      {filteredData.slice(0, 15).map((user, index) => {
        return <SearchCardResult user={user} key={index} />;
      })}
    </div>
  );
};

export default SearchCard;
