import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { Container, Snackbar } from "@material-ui/core";
import Button from "./components/Button";
import NavbarRight from "./components/NavbarRight";
import { TWEETS_STORAGE } from "./utils/constants";
import List from "./components/List";
import Aside from "./components/Aside";

function App() {
  const [toast, setToast] = useState({
    open: false,
    text: null,
  });

  const [allTweets, setAlltTweets] = useState([]);

  useEffect(() => {
    const AllTweetsStorage = localStorage.getItem(TWEETS_STORAGE);
    const allTweetsArray = JSON.parse(AllTweetsStorage);
    console.log(allTweetsArray);
    setAlltTweets(allTweetsArray);
  }, []);

  return (
    <Container className="twwets-simulator" maxWidth={false}>
      <Header />

      <div className="flex">
        <NavbarRight />
        <List allTweets={allTweets} />
        <Aside />
      </div>

      <Button setToast={setToast} allTweets={allTweets} />

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={toast.open}
        autoHideDuration={1000}
        message={<span id="message-id">{toast.text}</span>}
      />
    </Container>
  );
}

export default App;
