export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="elements__card">
      <button
        aria-label="delete"
        type="button"
        className="elements__card-delete"
      ></button>
      <div
        className="elements__card-image"
        style={{ backgroundImage: ` url(${props.card.link})` }}
        onClick={handleClick}
      />
      {/* <img
                  src={card.link}
                  alt={card.name}
                  className="elements__card-image"
                /> */}
      <div className="elements__card-info">
        <h2 className="elements__card-title">{props.card.name}</h2>
        <div className="elements__card-like-counter">
          <button
            aria-label="like"
            type="button"
            className="elements__card-button"
          ></button>
          <span className="elements__card-likes">
            {props.card.likes.length}
          </span>
        </div>
      </div>
    </li>
  );
}
