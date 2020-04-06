import React from "react";

const dg_police_news_icon = {
  padding: "50px 55px",
  color: "white",
  marginLeft: "40px",
  marginRight: "40px",
  marginBottom: "40px",
  backgroundColor: "#243e5d",
};

const NewsThumbnail = ({ thumbnail, thumbnailAltText }) =>
  thumbnail ? (
    <div>
      <img className="dg_image left" src={thumbnail} alt={thumbnailAltText} />
    </div>
  ) : (
    <div style={dg_police_news_icon}>
      <i className="far fa-shield-alt fa-3x"></i>
    </div>
  );

export default NewsThumbnail;
