import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  // Checking if the current user is the owner of the current card
  const isOwn = card.owner._id === currentUser._id;

  // Creating a variable which set the `className` for the delete button
  const cardDeleteButtonClassName = `elements__card-delete ${
    isOwn ? "elements__card-delete_visible" : "elements__card-delete_hidden"
  }`;

  // Check if the card was liked by the current user
  const isLiked = card.likes.some((i) => i._id === currentUser._id);

  // Create a variable which you then set in `className` for the like button
  const cardLikeButtonClassName = `elements__card-button ${
    isLiked && "elements__card-button_active"
  }`;

  function handleClick() {
    onCardClick(card);
  }
  function handleLikeClick() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }
  return (
    <li className="elements__card">
      <button
        onClick={handleDeleteClick}
        aria-label="delete"
        type="button"
        className={cardDeleteButtonClassName}
      ></button>
      <div
        className="elements__card-image"
        style={{ backgroundImage: ` url(${card.link})` }}
        onClick={handleClick}
      />
      {/* <img
                  src={card.link}
                  alt={card.name}
                  className="elements__card-image"
                /> */}
      <div className="elements__card-info">
        <h2 className="elements__card-title">{card.name}</h2>
        <div className="elements__card-like-counter">
          <button
            onClick={handleLikeClick}
            aria-label="like"
            type="button"
            className={cardLikeButtonClassName}
          ></button>
          <span className="elements__card-likes">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
