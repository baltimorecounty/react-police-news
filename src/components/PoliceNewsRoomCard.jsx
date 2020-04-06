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

  const dg_police_news_date_author = {
    borderRight: "1px solid #292929",
    paddingRight: "10px",
    marginRight: "10px",
  };

  return (
    <Card className="text-left">
      <h2>{title}</h2>
      <CardContent>
        <div className="row">
          <PoliceNewsThumbnail
            thumbnail={thumbnail}
            thumbnailAltText={thumbnailAltText}
          />
          <div>
            <p>
              <span style={dg_police_news_date_author}>{published}</span>
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
