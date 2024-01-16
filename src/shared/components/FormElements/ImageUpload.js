import React, { useRef } from "react";

import Input from "./Input";
import Button from "./Button";

import "./ImageUpload.css";

const ImageUpload = ({ id, center }) => {
  const filePickerRef = useRef();

  const pickedHandler = (e) => {
    console.log(e.target);
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
          <img src="" alt="Preview" />
        </div>
      </div>
      <Button type="button" onClick={pickImageHandler}>
        PICK IMAGE
      </Button>
    </div>
  );
};

export default ImageUpload;
