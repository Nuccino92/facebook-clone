import { AiOutlineClose } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";

const ProfilePictureModal = ({ setProfilePictureModal, handleChange }) => {
  const handleModal = (e) => {
    e.target.className.includes("ProfilePictureModal") &&
      setProfilePictureModal(false);
  };

  const awaitClose = () => {
    setTimeout(() => {
      setProfilePictureModal(false);
    }, 350);
  };

  return (
    <div className="OptionsModals ProfilePictureModal" onClick={handleModal}>
      <div className="modal-content">
        <header className="modal-header">
          <h1>Update profile picture</h1>{" "}
          <div
            className={"EditProfile-close"}
            onClick={() => setProfilePictureModal(false)}
          >
            <AiOutlineClose size={22} style={{ pointerEvents: "none" }} />
          </div>
        </header>
        <div className="modal-content-body">
          <input
            name="profilePicture"
            type="file"
            id="profilePicture"
            accept="image/*"
            onChange={(e) => {
              handleChange(e);
              awaitClose();
            }}
          />
          <label htmlFor="profilePicture">
            <div>
              <FiUpload size={24} style={{ pointerEvents: "none" }} />
            </div>
            <span>Upload Photo</span>
          </label>{" "}
        </div>
      </div>
      <input
        className="bbb"
        name="profileFile"
        type="file"
        onChange={handleChange}
      />
    </div>
  );
};

export default ProfilePictureModal;
