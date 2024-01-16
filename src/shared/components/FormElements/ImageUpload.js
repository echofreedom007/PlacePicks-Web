import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

import "./ImageUpload.css";

const ImageUpload = ({ id, center, onInput, errorText }) => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    // This FileReader API can convert a file which is like a binary data into a
    // readable/outputable image.
    const fileReader = new FileReader();
    // Whenever the file reader loads a new file or is done parsing a file,
    // this funciton will execute once the readAsDataURL is done.
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = (e) => {
    let pcikedFile;
    let fileIsValid;

    if (e.target.files && e.target.files.length === 1) {
      pcikedFile = e.target.files[0];
      setFile(pcikedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    onInput(id, pcikedFile, fileIsValid);
  };
  const pickImageHandler = () => {
    // the click() method exists on the DOM node and will open up that
    // file picker. In this way, even we set the input to invisible, we
    // can still utilize the click listener on it without seeing it.
    if (filePickerRef.current) {
      filePickerRef.current.click();
    }
  };

  return (
    <div className="form-control">
      <input
        id={id}
        type="file"
        style={{ display: "none" }}
        accept=".jpg,.png,.jpeg"
        ref={filePickerRef}
        onChange={pickedHandler}
      />
      <div className={`image-upload ${center && "center"}`}>
        <div className="image-upload__preview">
          {previewUrl ? (
            <img src={previewUrl} alt="Preview" />
          ) : (
            <p>Please pick an image.</p>
          )}
        </div>
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
      {!isValid && <p>{errorText}</p>}
    </div>
  );
};

ImageUpload.propTypes = {
  id: PropTypes.string,
  center: PropTypes.bool,
  onInput: PropTypes.func,
  errorText: PropTypes.string,
};

export default ImageUpload;
