import React, { useRef } from "react";
import "./style.css";
import profile from "../../assets/images/profile.jpg";
import { Button, Input, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const CreactePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleOpenModal = () => {
    onOpen();
  };
  const chooseFile = useRef();
  // for img upload
  const handleImgUpload = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="container">
        <div className="create-post-wrapper">
          <div className="user-profile">
            <div className="user-img">
              <img src={profile} alt="profile" />
            </div>
          </div>
          <div onClick={handleOpenModal} className="user-write-box">
            <Input placeholder="Start post" />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="modal-header">
              <div className="user-profile">
                <div className="user-img">
                  <img src={profile} alt="profile" />
                </div>
              </div>
              <div className="modal-user-name">
                <h1>akash khan</h1>
              </div>
            </div>
            <div className="modal-write-box">
              <textarea
                rows="4"
                cols="50"
                placeholder="What do you want to talk about?"
              ></textarea>
            </div>
          </ModalBody>

          <ModalFooter>
            <input
              type="file"
              onChange={handleImgUpload}
              hidden
              ref={chooseFile}
            />
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => chooseFile.current.click()}
            >
              Select Images
            </Button>
            <Button variant="ghost">Post</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreactePost;
