import "./EditProfile.css";
import "./OptionsModals/OptionsModals.css";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ProfilePictureModal from "./OptionsModals/ProfilePictureModal";
import CoverPhotoModal from "./OptionsModals/CoverPhotoModal";
import BioModal from "./OptionsModals/BioModal";
import { updateUser } from "../../../../api/user";
import convertBase64 from "../../../../utils/convertBase64";
import { loadUser } from "../../../../redux/actions/user";

const EditProfile = ({ setEditModal }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  const handleModal = (e) => {
    e.target.className === "EditProfile" && setEditModal(false);
  };

  const [uploadProfile, setUploadProfile] = useState(undefined);
  const [uploadCover, setUploadCover] = useState(undefined);

  const [newProfileData, setNewProfileData] = useState({
    profilePicture: user.profile[0].profilePicture,
    coverPhoto: user.profile[0].coverPhoto,
    bio: user.profile[0].bio,
  });

  const [profilePictureModal, setProfilePictureModal] = useState(false);
  const [coverPhotoModal, setCoverPhotoModal] = useState(false);
  const [bioModal, setBioModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("bio", newProfileData.bio);
    data.append("profilePicture", newProfileData.profilePicture);
    data.append("coverPhoto", newProfileData.coverPhoto);

    await updateUser(user._id, data).then(() => {
      dispatch(loadUser());
    });
    setEditModal(false);
  };

  const handleChange = async (e) => {
    const { name, value, files, type } = e.target;

    if (type === "file" && name === "profilePicture") {
      const base64 = await convertBase64(files[0]);
      setUploadProfile(base64);
    }

    if (type === "file" && name === "coverPhoto") {
      const base64 = await convertBase64(files[0]);
      setUploadCover(base64);
    }

    setNewProfileData((prev) => {
      return {
        ...prev,
        [name]: type === "file" ? files[0] : value,
      };
    });
  };

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

          <img
            src={
              uploadProfile === undefined
                ? user.profile[0].profilePicture
                : uploadProfile
            }
            alt="Profile"
          />
        </div>
        <div className="EditProfile-cover-photo">
          <header>
            <h3>Cover Photo</h3>{" "}
            <button onClick={() => setCoverPhotoModal(true)}>Add</button>
          </header>
          <div>
            {user.profile[0].coverPhoto || uploadCover !== undefined ? (
              <img
                className="EditProfile-cover-photo-image"
                src={
                  uploadCover === undefined
                    ? user.profile[0].coverPhoto
                    : uploadCover
                }
                alt="cover"
              />
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
            {newProfileData.bio.length === 0
              ? "Nothing in bio"
              : newProfileData.bio}
          </p>
        </div>
        <div className="EditProfile-save">
          <button onClick={handleSubmit}>Save Changes</button>
        </div>
      </div>
      {profilePictureModal && (
        <ProfilePictureModal
          setProfilePictureModal={setProfilePictureModal}
          handleChange={handleChange}
        />
      )}
      {coverPhotoModal && (
        <CoverPhotoModal
          setCoverPhotoModal={setCoverPhotoModal}
          handleChange={handleChange}
        />
      )}
      {bioModal && (
        <BioModal
          setBioModal={setBioModal}
          setNewProfileData={setNewProfileData}
          newProfileData={newProfileData}
        />
      )}
    </div>
  );
};

export default EditProfile;
