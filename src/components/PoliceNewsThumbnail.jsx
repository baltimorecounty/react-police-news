import React from "react";

const iconStyles = {
  padding: "30px",
  color: "white",
  backgroundColor: "#243e5d",
};

const imageStyles = {
  width: "100%",
  display: "inline",
};

const NewsThumbnail = ({ thumbnail, thumbnailAltText }) =>
  thumbnail ? (
    <img style={imageStyles} src={thumbnail} alt={thumbnailAltText} />
  ) : (
    <i className="far fa-shield-alt fa-3x" style={iconStyles}></i>
  );

export default NewsThumbnail;
