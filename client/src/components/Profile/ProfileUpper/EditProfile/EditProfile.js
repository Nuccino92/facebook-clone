import "./EditProfile.css";
import "./OptionsModals/OptionsModals.css";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ProfilePictureModal from "./OptionsModals/ProfilePictureModal";
import CoverPhotoModal from "./OptionsModals/CoverPhotoModal";
import BioModal from "./OptionsModals/BioModal";

const EditProfile = ({ setEditModal }) => {
  const { user } = useSelector((state) => state.userReducer);

  const handleModal = (e) => {
    e.target.className === "EditProfile" && setEditModal(false);
  };

  const [newProfileData, setNewProfileData] = useState({
    profilePicture: user.profile[0].profilePicture,
    coverPhoto: user.profile[0].coverPhoto,
    bio: user.profile[0].bio,
  });

  const [profilePictureModal, setProfilePictureModal] = useState(false);
  const [coverPhotoModal, setCoverPhotoModal] = useState(false);
  const [bioModal, setBioModal] = useState(false);

  useEffect(() => {
    console.log(newProfileData);
  }, [newProfileData]);

  return (
    <div className="EditProfile" onClick={handleModal}>
      <div className="EditProfile-content">
        <header className="modal-header">
          <h1>Edit Profile</h1>{" "}
          <div
            className={"EditProfile-close"}
            onClick={() => setEditModal(false)}
          >
            <AiOutlineClose size={22} style={{ pointerEvents: "none" }} />
          </div>
        </header>
        <div className="EditProfile-profile-picture">
          <header>
            <h3>Profile Picture</h3>{" "}
            <button onClick={() => setProfilePictureModal(true)}>Add</button>
          </header>
          <img src={user.profile[0].profilePicture} alt="Profile"></img>
        </div>
        <div className="EditProfile-cover-photo">
          <header>
            <h3>Cover Photo</h3>{" "}
            <button onClick={() => setCoverPhotoModal(true)}>Add</button>
          </header>
          <div>
            {user.profile[0].coverPhoto ? (
              <img
                className="EditProfile-cover-photo-image"
                src={user.profile[0].coverPhoto}
                alt="cover"
              ></img>
            ) : (
              <div className="EditProfile-cover-photo-image  cover-photo-placeholder"></div>
            )}{" "}
          </div>
        </div>
        <div className="EditProfile-bio">
          <header>
            <h3>Bio</h3> <button onClick={() => setBioModal(true)}>Edit</button>
          </header>
          <p>
            {user.profile[0].bio.length === 0
              ? "Nothing in bio"
              : user.profile[0].bio}
          </p>
        </div>
        <div className="EditProfile-save">
          <button>Save Changes</button>
        </div>
      </div>
      {profilePictureModal && (
        <ProfilePictureModal setProfilePictureModal={setProfilePictureModal} />
      )}
      {coverPhotoModal && (
        <CoverPhotoModal setCoverPhotoModal={setCoverPhotoModal} />
      )}
      {bioModal && <BioModal setBioModal={setBioModal} />}
    </div>
  );
};

export default EditProfile;
