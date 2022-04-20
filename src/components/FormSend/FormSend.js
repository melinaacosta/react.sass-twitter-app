import React, { useState } from "react";
import { FormControl, FormGroup, TextField, Button } from "@material-ui/core";
import "./FormSend.scss";
import User from "../../assets/img/user.png";

export default function FormSend({ sendTweet }) {
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: "",
  });

  const onFormChange = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="form-send">
      <h2 className="form-send__title">Inicio</h2>

      <form
        className="form-send__form"
        onSubmit={(event) => sendTweet(event, formValue)}
        onChange={onFormChange}
      >
        <FormControl>
          <FormGroup className="first-box">
            <img alt="user-img" src={User} className="img-user"></img>
            <TextField
              className="form-send__form-name"
              type="text"
              name="name"
              placeholder="Nombre de usuario"
              margin="normal"
            ></TextField>
          </FormGroup>
          <FormGroup>
            <TextField
              className="form-send__form-textarea"
              name="tweet"
              placeholder="¿Qué está pasando?"
              multiline
              rows="6"
              margin="normal"
            ></TextField>
          </FormGroup>
          <FormGroup>
            <Button type="submit">Enviar Tweet</Button>
          </FormGroup>
        </FormControl>
      </form>
    </div>
  );
}
