import {
  Button,
  Card,
  CardContent,
  CardFooter,
} from "@baltimorecounty/dotgov-components";

import PoliceNewsThumbnail from "./PoliceNewsThumbnail";
import React from "react";

const NewsRoomCard = (props) => {
  const {
    publishDate,
    title,
    author,
    articleSummary,
    thumbnail,
    thumbnailAltText,
    url,
  } = props;

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const published = new Date(publishDate).toLocaleDateString("en-US", options);

  const authorStyles = {
    borderRight: "1px solid #292929",
    paddingRight: "10px",
    marginRight: "10px",
  };

  return (
    <Card className="text-left">
      <h2>
        <a href={url}>{title}</a>
      </h2>
      <CardContent>
        <div className="row">
          <div className="col-sm-3 col-xs-12 text-center">
            <PoliceNewsThumbnail
              thumbnail={thumbnail}
              thumbnailAltText={thumbnailAltText}
            />
          </div>
          <div className="col-sm-9 col-xs-12">
            <p>
              <span style={authorStyles}>{published}</span>
              <span>{author}</span>
            </p>
            <p>{articleSummary}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="text-right">
        <Button as="a" text="Details" href={url} />
      </CardFooter>
    </Card>
  );
};

export default NewsRoomCard;
