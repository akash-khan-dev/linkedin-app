import React from "react";
import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useRef } from "react";
import { GrGallery } from "react-icons/gr";
import ProfileUpload from "./ProfileUpload";
const Popup = ({ isOpen, onClose }) => {
  const chooseFile = useRef();
  const handleProfileChange = (e) => {
    console.log(e.target.files);
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
                <ProfileUpload />
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};
export default Popup;
