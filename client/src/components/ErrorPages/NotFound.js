import { useNavigate } from "react-router-dom";
import "./NotFound.css";
import paperClip from "./paperclip.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="NotFound">
      <div className="NotFound-inner">
        <img src={paperClip} alt="Paperclip"></img>
        <h3>This Page Isn't Available</h3>
        <p>
          The link may be broken, or the page may have been removed. Check to
          see if the link you're trying to open is correct.
        </p>

        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default NotFound;
