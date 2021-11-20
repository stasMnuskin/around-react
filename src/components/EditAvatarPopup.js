import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log('avatarRef = ', avatarRef.current.value);
    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      onClose={props.onClose}
      isOpen={props.isOpen}
      name="avatar"
      title="Change profile picture"
      buttonText="Save"
    >
      <input
        ref={avatarRef}
        id="avatar-input"
        name="link"
        type="url"
        className="modal__form-input modal__form-input_mod_avatar"
        placeholder="Avatar link"
        required
      />
      <span id="avatar-input-error" className="modal__input-error"></span>
    </PopupWithForm>
  );
}
