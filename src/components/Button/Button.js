import React, { useState } from "react";
import "./Button.scss";
import ModalContainer from "../ModalContainer";
import FormSend from "../FormSend";
import { TWEETS_STORAGE } from "../../utils/constants";

export default function Button({ setToast, allTweets }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const sendTweet = (event, formValue) => {
    event.preventDefault();
    const { name, tweet } = formValue;
    let allTweetsArray = [];

    if (allTweets) {
      allTweetsArray = allTweets;
    }

    if (!name || !tweet) {
      setToast({
        open: true,
        text: "Todos los campos son obligatorios",
      });
    } else {
      allTweetsArray.push(formValue);
      localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray));
      setToast({
        open: true,
        text: "Tweet enviado correctamente",
      });
      closeModal();
    }
    allTweetsArray = [];
  };

  return (
    <div className="button-send">
      <div className="button-send__open-modal" aria-label="add">
        <button onClick={openModal}>Twittear</button>
      </div>
      <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
        <FormSend sendTweet={sendTweet} />
      </ModalContainer>
    </div>
  );
}
