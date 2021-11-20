import React from "react";
// import { api } from "../utils/api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  cards,
  onCardDelete,
  onCardLike,
  onCardClick,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__image"
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
        >
          <button
            aria-label="avatar"
            type="button"
            className="profile__image-button"
            onClick={onEditAvatarClick}
          ></button>
        </div>
        <div className="profile__description">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            aria-label="like"
            type="button"
            className="profile__edit-button"
            onClick={onEditProfileClick}
          ></button>
          <p className="profile__job">{currentUser.about}</p>
        </div>
        <button
          aria-label="like"
          type="button"
          className="profile__add-button"
          onClick={onAddPlaceClick}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => {
            // console.log("card = ", card);
            return (
              <Card
                onCardDelete={onCardDelete}
                onCardLike={onCardLike}
                onCardClick={onCardClick}
                card={card}
                key={card._id}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}
