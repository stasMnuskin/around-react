import React from "react"

export default function PopupWithForm(props) {
  return (
    <div className={`modal modal_type_${props.name} ${props.isOpen ? 'modal_open':''}`}>
      <div className="modal__container">
        <button onClick={props.onClose}
          aria-label="close"
          type="button"
          className="modal__close-button"
        ></button>
        <form onSubmit={props.onSubmit} name={props.name} action="#" className="modal__form">
          <h2 className="modal__title">{props.title}</h2>
          {props.children}
          <button type="submit" className="modal__form-button">
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}
