import './style/ItemCard.css';

export default function ItemCard(props) {
  const handleAddButtonClick = () => {
    props.onAdd();
  };

  return (
    <article className="item-card">
      <p className="item-card__price">
        {props.price}
      </p>
      <img 
        className="item-card__img"
        src={props.imgUrl} alt={props.title}
      />
      <div className="card__bottom">
        <p className="item-card__title">
          {props.name}
        </p>
        <button
          className="item-card__btn"
          onClick={handleAddButtonClick}
        > 
          Add to cart
        </button>
      </div>
    </article>
  )
}