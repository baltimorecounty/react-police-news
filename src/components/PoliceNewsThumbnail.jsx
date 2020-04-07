import React from "react";

const iconStyles = {
  padding: "60px",
  color: "white",
  margin: "0px 40px 40px 40px",
  backgroundColor: "#243e5d",
  marginBottom: "0",
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
