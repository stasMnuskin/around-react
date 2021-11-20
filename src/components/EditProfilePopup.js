import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  //handlers
  function handleNameChange(evt) {
    setName(evt.target.value);
  }
  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }
  // Subscription to the context
  const currentUser = React.useContext(CurrentUserContext);

  // After loading the current user from the API
  // their data will be used in managed components.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleSubmit(e) {
    // Prevent the browser from navigating to the form address
    e.preventDefault();

    // Pass the values of the managed components to the external handler
    props.onUpdateUser({
      name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      onClose={props.onClose}
      isOpen={props.isOpen}
      name="edit"
      title="Edit Profile"
      buttonText="Save"
      onSubmit={handleSubmit}
    >
      <input
        onChange={handleNameChange}
        value={name}
        id="name-input"
        name="input_name"
        type="text"
        className="modal__form-input modal__form-input_mod_name"
        placeholder="Name"
        required
        minLength="2"
        maxLength="40"
      />
      <span className="modal__input-error" id="name-input-error"></span>
      <input
        onChange={handleDescriptionChange}
        value={description}
        id="job-input"
        name="input_job"
        type="text"
        className="modal__form-input modal__form-input_mod_job"
        placeholder="Job"
        required
        minLength="2"
        maxLength="200"
      />
      <span id="job-input-error" className="modal__input-error"></span>
    </PopupWithForm>
  );
}
