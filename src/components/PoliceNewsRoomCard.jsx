import {
  Card,
  CardContent,
  CardFooter,
  Button,
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
      <h2>{title}</h2>
      <CardContent>
        <div className="row">
          <div className="col-3">
            <PoliceNewsThumbnail
              thumbnail={thumbnail}
              thumbnailAltText={thumbnailAltText}
            />
          </div>
          <div className="col-9">
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
