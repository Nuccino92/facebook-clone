import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

const BioModal = ({ setBioModal }) => {
  const handleModal = (e) => {
    e.target.className.includes("BioModal") && setBioModal(false);
  };

  const { user } = useSelector((state) => state.userReducer);

  return (
    <div className="OptionsModals BioModal" onClick={handleModal}>
      <div className="modal-content">
        <header className="modal-header">
          <h1>Update Bio</h1>{" "}
          <div
            className={"EditProfile-close"}
            onClick={() => setBioModal(false)}
          >
            <AiOutlineClose size={22} style={{ pointerEvents: "none" }} />
          </div>
        </header>
        <div className="Bio-content-body">
          <textarea
            placeholder="Update bio"
            defaultValue={user.profile[0].bio}
          ></textarea>
          <button>Save Bio</button>
        </div>
      </div>
    </div>
  );
};

export default BioModal;
