import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api
      .getInitialCards()
      .then((result) => {
        setCards(result);
      })
      .catch(console.log);
  }, []);
  function handleCardLike(card) {
    // Check one more time if this card was already liked
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Send a request to the API and getting the updated card data
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch(console.log);
    // console.log("like");
  }

  function handleCardDelete(card) {
    // console.log("card = ", card);
    api
      .deleteCard(card._id)
      .then((result) => {
        setCards(cards.filter((filteredCard) => filteredCard._id !== card._id));
      })
      .catch(console.log);
  }

  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    about: "",
    avatar: "",
    _id: "",
  });

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((result) => {
        // console.log("result = " ,result);
        setCurrentUser(result);

        // name: result.name,
        // about: result.about,
        // avatar: result.avatar,
        // _id: result._id,
      })
      .catch(console.log);
  }, []);

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
  function handleUpdateAvatar(avatar) {
    // console.log('avatar = ', avatar.);
    api
      .changeAvatar(avatar)
      .then((result) => {
        // console.log('result = ', result);
        setCurrentUser({
          name: result.name,
          about: result.about,
          avatar: result.avatar,
          _id: result._id,
        });
        closeAllPopups();
      })
      .catch(console.log);
  }

  function handleAddPlaceSubmit(card) {
    api
      .createCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(console.log);
  }
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

  function handleUpdateUser(user) {
    // console.log("user = ", user);
    api
      .updateProfile(user)
      .then((result) => {
        // console.log("result = ", result);
        setCurrentUser({
          name: result.name,
          about: result.about,
          avatar: result.avatar,
          _id: result._id,
        });
      })
      .then(closeAllPopups())
      .catch(console.log);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ title: "", link: "" });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__wrapper">
          <Header />
          <Main
            onCardDelete={handleCardDelete}
            onCardLike={handleCardLike}
            cards={cards}
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onCardClick={handleImageClick}
          />
          <Footer />
          <div>
            <AddPlacePopup
              onClose={closeAllPopups}
              isOpen={isAddPlacePopupOpen}
              onAddPlaceSubmit={handleAddPlaceSubmit}
            ></AddPlacePopup>
            <PopupWithForm
              onClose={closeAllPopups}
              name="delete-card"
              title="Are You Sure?"
              buttonText="Yes"
            >
              {/* <input
                id="avatar-input"
                name="link"
                type="url"
                className="modal__form-input modal__form-input_mod_avatar"
                placeholder="Avatar link"
                required
              />
              <span
                id="avatar-input-error"
                className="modal__input-error"
              ></span> */}
            </PopupWithForm>
            <ImagePopup
              card={selectedCard}
              onClose={closeAllPopups}
              name="image"
            ></ImagePopup>
            <EditProfilePopup
              onUpdateUser={handleUpdateUser}
              isOpen={isEditProfilePopupOpen}
              onClose={closeAllPopups}
            ></EditProfilePopup>
            <EditAvatarPopup
              onUpdateAvatar={handleUpdateAvatar}
              isOpen={isEditAvatarPopupOpen}
              onClose={closeAllPopups}
            ></EditAvatarPopup>
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
