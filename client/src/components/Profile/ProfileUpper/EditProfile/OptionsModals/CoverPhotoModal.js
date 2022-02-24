import { AiOutlineClose } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";

const CoverPhotoModal = ({ setCoverPhotoModal }) => {
  const handleModal = (e) => {
    e.target.className.includes("CoverPhotoModal" || "cheese") &&
      setCoverPhotoModal(false);
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

export default CoverPhotoModal;
