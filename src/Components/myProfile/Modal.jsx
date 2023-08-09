import React, { createRef, useState } from "react";
import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useRef } from "react";
import { GrGallery } from "react-icons/gr";
import ProfileUpload from "./ProfileUpload";
import {
  getStorage,
  uploadString,
  ref,
  getDownloadURL,
} from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../Feature/UserSlice/UserSlice";

const Popup = ({ isOpen, onClose }) => {
  const storage = getStorage();
  const auth = getAuth();
  const dispatch = useDispatch();
  const user = useSelector((user) => user.logins.login);
  const storageRef = ref(storage, user.uid);
  const chooseFile = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("#");
  const cropperRef = createRef();

  const handleProfileChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setIsLoading(true);
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
      // from firebase storage for upload URL
      const message4 = cropperRef.current?.cropper
        .getCroppedCanvas()
        .toDataURL();
      uploadString(storageRef, message4, "data_url").then(() => {
        // from firebase storage for download URL
        getDownloadURL(storageRef).then((downloadURL) => {
          // from manage user firebase for profile upload
          updateProfile(auth.currentUser, {
            photoURL: downloadURL,
          }).then(() => {
            setImage(null);
            onClose();
            dispatch(LoginUser({ ...user, photoURL: downloadURL }));
            localStorage.setItem(
              "user",
              JSON.stringify({ ...user, photoURL: downloadURL })
            );
            setIsLoading(false);
          });
        });
      });
    }
  };

  return (
    <>
      <div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalBody>
              <div className="profile-upload-popup">
                <div>
                  <div
                    onClick={() => chooseFile.current.click()}
                    className="upload-box"
                  >
                    <GrGallery />
                  </div>
                  <div className="upload-content">
                    <p>Upload Photo</p>
                    <input
                      type="file"
                      hidden
                      ref={chooseFile}
                      onChange={handleProfileChange}
                    />
                  </div>
                </div>
                {image && (
                  <ProfileUpload
                    image={image}
                    cropData={cropData}
                    cropperRef={cropperRef}
                    setImage={setImage}
                    getCropData={getCropData}
                    isLoading={isLoading}
                  />
                )}
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};
export default Popup;
