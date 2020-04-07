import React from "react";

const iconStyles = {
  padding: "60px 60px",
  color: "white",
  margin: "0px 40px 40px 40px",
  backgroundColor: "#243e5d",
};

const NewsThumbnail = ({ thumbnail, thumbnailAltText }) =>
  thumbnail ? (
    <img
      className="float-left img-fluid"
      src={thumbnail}
      alt={thumbnailAltText}
    />
  ) : (
    <div style={iconStyles}>
      <i className="far fa-shield-alt fa-3x" style={{ marginBottom: "0" }}></i>
    </div>
  );

export default NewsThumbnail;
