import React from "react";
import Picture from "./Picture";

const Pictures = ({ pictures }) => {
  return (
    <div className="pictures-list">
      {pictures.map((picture) => {
        return <Picture key={picture.id} {...picture} />;
      })}
    </div>
  );
};

export default Pictures;
