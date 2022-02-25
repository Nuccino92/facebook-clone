import { AiOutlineClose } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";

const CoverPhotoModal = ({ setCoverPhotoModal, handleChange }) => {
  const handleModal = (e) => {
    e.target.className.includes("CoverPhotoModal" || "cheese") &&
      setCoverPhotoModal(false);
  };

  const awaitClose = () => {
    setTimeout(() => {
      setCoverPhotoModal(false);
    }, 350);
  };

  return (
    <div className="OptionsModals CoverPhotoModal" onClick={handleModal}>
      <div className="modal-content">
        <header className="modal-header">
          <h1>Update Cover Photo</h1>{" "}
          <div
            className={"EditProfile-close"}
            onClick={() => setCoverPhotoModal(false)}
          >
            <AiOutlineClose size={22} style={{ pointerEvents: "none" }} />
          </div>
        </header>
        <div className="modal-content-body">
          <input
            name="coverPhoto"
            type="file"
            id="coverPhoto"
            accept="image/*"
            onChange={(e) => {
              handleChange(e);
              awaitClose();
            }}
          />
          <label htmlFor="coverPhoto">
            <div>
              <FiUpload size={24} style={{ pointerEvents: "none" }} />
            </div>
            <span>Upload Photo</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default CoverPhotoModal;
