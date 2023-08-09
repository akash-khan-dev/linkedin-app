import React from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { RxCross2 } from "react-icons/rx";
import { Button } from "@chakra-ui/react";

const ProfileUpload = ({ image, cropperRef, setImage, getCropData }) => {
  const handleBackBtn = () => {
    setImage(null);
  };
  return (
    <>
      <div className="img-upload-box">
        <div className="upload-heading-wrapper">
          <div className="upload-heading-text">
            <h1>Upload Profile Picture</h1>
          </div>
          <div onClick={handleBackBtn} className="upload-back-button">
            <RxCross2 />
          </div>
        </div>

        <div className="preview-box">
          <div className="img-preview" />
        </div>
        <Cropper
          ref={cropperRef}
          style={{ height: 400, width: "100%" }}
          zoomTo={0.5}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          autoCropArea={1}
          checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
          guides={true}
        />
        <div className="upload-button">
          <Button onClick={getCropData} colorScheme="teal" variant="outline">
            Upload
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProfileUpload;
