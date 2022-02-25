import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

const BioModal = ({ setBioModal, setNewProfileData, newProfileData }) => {
  const handleModal = (e) => {
    e.target.className.includes("BioModal") && setBioModal(false);
  };

  const { user } = useSelector((state) => state.userReducer);

  const [textAreaData, setTextAreaData] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setTextAreaData(value);
  };

  const handleSubmit = () => {
    setNewProfileData((prev) => {
      return {
        ...prev,
        bio: textAreaData,
      };
    });
  };

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
            defaultValue={newProfileData.bio}
            name={"bio"}
            onChange={handleChange}
          ></textarea>
          <button
            onClick={() => {
              handleSubmit();
              setBioModal(false);
            }}
          >
            Save Bio
          </button>
        </div>
      </div>
    </div>
  );
};

export default BioModal;
