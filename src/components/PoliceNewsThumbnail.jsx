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

//**********************************************************
//Police were being naughty and using an unapproved logo.
//This removes that logo and forces the standard icon.
//**********************************************************
const checkForPoliceImage = (thumbnail) => {
  const newThumbnail =
    thumbnail.includes("1 LOGO for use on posts.jpg") ||
    thumbnail.includes("CURRENT-LOGO-white-background.jpg") ||
    thumbnail.includes("BCoPD logo.png")
      ? null
      : thumbnail;
  return newThumbnail;
};

const NewsThumbnail = ({ thumbnail, thumbnailAltText }) =>
  checkForPoliceImage(thumbnail) ? (
    <img style={imageStyles} src={thumbnail} alt={thumbnailAltText} />
  ) : (
    <i className="far fa-shield-alt fa-3x" style={iconStyles}></i>
  );

export default NewsThumbnail;
