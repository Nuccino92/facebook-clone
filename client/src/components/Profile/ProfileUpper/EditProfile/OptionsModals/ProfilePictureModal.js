import { AiOutlineClose } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";

const ProfilePictureModal = ({ setProfilePictureModal }) => {
  const handleModal = (e) => {
    e.target.className.includes("ProfilePictureModal") &&
      setProfilePictureModal(false);
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
          <div>
            <div>
              <FiUpload size={24} style={{ pointerEvents: "none" }} />
            </div>
            <span>Upload Photo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePictureModal;
