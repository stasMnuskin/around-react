import React from "react"

export default function ImagePopup(props) {
  // console.log('imagepopup props.card.link = ', props.card.link);
  return (
    <div
      className={`modal modal_type_${props.name} ${
        props.card.name ? "modal_open" : ""
      }`}
    >
      <div className={`modal__container modal__container_type_${props.name}`}>
        <button
          onClick={props.onClose}
          aria-label="close"
          type="button"
          className="modal__close-button"
        ></button>
        <figure className="modal__figure">
          <img
            className="modal__image"
            src={props.card.link}
            alt={props.card.name}
          />
          <figcaption className="modal__caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}
