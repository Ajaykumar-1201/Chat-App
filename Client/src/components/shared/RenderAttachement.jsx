import React from "react";
import { transformImage } from "../../lib/features";
import FileOpenIcon from "@mui/icons-material/FileOpen";

const RenderAttachement = (file, url) => {
  switch (file) {
    case "video":
      return <video src={url} preload="none" width={"200px"} controls />;
    case "image":
      return (
        <img
          src={transformImage(url, 200)}
          alt={"Attachement"}
          width={"200px"}
          height={"150px"}
          style={{
            objectFit: "contain",
          }}
        />
      );

    case "audio":
      return <audio controls src={url} preload="none" />;

    default:
      return <FileOpenIcon />;
  }
};

export default RenderAttachement;
