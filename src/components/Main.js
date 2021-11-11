import React from "react";
import { api } from "../utils/api";
import Card from "./Card";

export default function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((result) => {
        // console.log("result = " ,result);
        setUserName(result.name);
        setUserDescription(result.about);
        setUserAvatar(result.avatar);
      })
      .catch(console.log);
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((result) => {
        setCards(result);
      })
      .catch(console.log);
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__image"
          style={{ backgroundImage: `url(${userAvatar})` }}
        >
          <button
            aria-label="avatar"
            type="button"
            className="profile__image-button"
            onClick={props.onEditAvatarClick}
          ></button>
        </div>
        <div className="profile__description">
          <h1 className="profile__name">{userName}</h1>
          <button
            aria-label="like"
            type="button"
            className="profile__edit-button"
            onClick={props.onEditProfileClick}
          ></button>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button
          aria-label="like"
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlaceClick}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => {
            // console.log("card = ", card);
            return (
              <Card
                onCardClick={props.onCardClick}
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
