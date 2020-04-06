import React from "react";

const dg_police_news_icon = {
  padding: "50px 55px",
  color: "white",
  margin: "0px 40px 40px 40px",
  backgroundColor: "#243e5d",
};

const NewsThumbnail = ({ thumbnail, thumbnailAltText }) =>
  thumbnail ? (
    <div>
      <img
        className="img-fluid img-thumbnail"
        src={thumbnail}
        alt={thumbnailAltText}
      />
    </div>
  ) : (
    <div style={dg_police_news_icon}>
      <i className="far fa-shield-alt fa-3x"></i>
    </div>
  );

export default NewsThumbnail;
