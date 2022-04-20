import React from "react";
import "./List.scss";
import { Grid } from "@material-ui/core";
import Tweet from "../Tweet";

export default function List({ allTweets }) {
  console.log(allTweets);
  if (!allTweets || allTweets.length === 0) {
    return (
      <div className="list-tweets-empty">
        <h2>No hay Tweets...</h2>
      </div>
    );
  }

  return (
    <Grid container spacing={2} className="list-tweets">
      {allTweets.map((tweet, i) => {
        return (
          <Grid key={i} item xs={10}>
            <Tweet tweet={tweet} index={i} />
          </Grid>
        );
      })}
    </Grid>
  );
}
