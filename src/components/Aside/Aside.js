import React from "react";
import "./Aside.scss";
import searchIcon from "../../assets/img/search.svg";

export default function Aside() {
  return (
    <div>
      <input
        type="search"
        placeholder="Buscar en Twitter"
        className="input-search"
      ></input>
      <div className="box-aside">
        <h3>Que esta pasando?</h3>
      </div>
    </div>
  );
}
