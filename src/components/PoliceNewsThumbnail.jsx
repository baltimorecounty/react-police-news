import React from "react";

const NewsThumbnail = ({ thumbnail, thumbnailAltText }) =>
  thumbnail ? (
    <img className="dg_image left" src={thumbnail} alt={thumbnailAltText} />
  ) : (
    <i className="far fa-shield-alt fa-3x dg_police_news_icon"></i>
  );

export default NewsThumbnail;
