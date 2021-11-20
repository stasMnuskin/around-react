import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const [placeTitle, setPlaceTitle] = React.useState("");
  const [placeLink, setPlaceLink] = React.useState("");

  function titleChange(evt) {
    evt.preventDefault();
    setPlaceTitle(evt.target.value);
  }
  function linkChange(evt) {
    evt.preventDefault();
    setPlaceLink(evt.target.value);
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlaceSubmit({
      name: placeTitle,
      link: placeLink,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      onClose={onClose}
      isOpen={isOpen}
      name="add"
      title="New Place"
      buttonText="Save"
    >
      <input
        onChange={titleChange}
        value={placeTitle}
        id="title-input"
        name="name"
        type="text"
        className="modal__form-input modal__form-input_mod_title"
        placeholder="Title"
        required
        minLength="1"
        maxLength="30"
      />
      <span id="title-input-error" className="modal__input-error">
        {" "}
      </span>
      <input
        onChange={linkChange}
        value={placeLink}
        id="link-input"
        name="link"
        type="url"
        className="modal__form-input modal__form-input_mod_image"
        placeholder="Image link"
        required
      />
      <span id="link-input-error" className="modal__input-error"></span>
    </PopupWithForm>
  );
}
