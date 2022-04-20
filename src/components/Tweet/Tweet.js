import React from "react";
import { Card, CardContent } from "@material-ui/core";
import "./Tweet.scss";
// import DeleteIcon from "@mui/icons-material";

export default function Tweet({ tweet: { name, tweet }, index }) {
  return (
    <Card>
      <CardContent>
        <div className="tweet__header">
          <h5>{name}</h5>
          {/* <DeleteIcon onClick={() => console.log("borrado")} /> */}
        </div>
        <p>{tweet}</p>
      </CardContent>
    </Card>
  );
}
