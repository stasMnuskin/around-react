import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
// import Card from "./Card";

function App() {
  //modals initial states with hooks
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });

  //handlers
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleImageClick(card) {
    setSelectedCard({ name: card.name, link: card.link });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ title: "", link: "" });
  }

  return (
    <div className="page">
      <div className="page__wrapper">
        <Header />
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleImageClick}
        />
        <Footer />
        <div>
          <PopupWithForm
            onClose={closeAllPopups}
            isOpen={isEditProfilePopupOpen}
            name="edit"
            title="Edit Profile"
            buttonText="Save"
          >
            <input
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
          <PopupWithForm
            onClose={closeAllPopups}
            isOpen={isAddPlacePopupOpen}
            name="add"
            title="New Place"
            buttonText="Save"
          >
            <input
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
              id="link-input"
              name="link"
              type="url"
              className="modal__form-input modal__form-input_mod_image"
              placeholder="Image link"
              required
            />
            <span id="link-input-error" className="modal__input-error"></span>
          </PopupWithForm>
          <PopupWithForm
            onClose={closeAllPopups}
            isOpen={isEditAvatarPopupOpen}
            name="avatar"
            title="Change profile picture"
            buttonText="Save"
          >
            <input
              id="avatar-input"
              name="link"
              type="url"
              className="modal__form-input modal__form-input_mod_avatar"
              placeholder="Avatar link"
              required
            />
            <span id="avatar-input-error" className="modal__input-error"></span>
          </PopupWithForm>
          <PopupWithForm
            onClose={closeAllPopups}
            name="delete-card"
            title="Are You Sure?"
            buttonText="Yes"
          >
            <input
              id="avatar-input"
              name="link"
              type="url"
              className="modal__form-input modal__form-input_mod_avatar"
              placeholder="Avatar link"
              required
            />
            <span id="avatar-input-error" className="modal__input-error"></span>
          </PopupWithForm>
          <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
            name="image"
          ></ImagePopup>
        </div>
      </div>
    </div>
  );
}

export default App;
