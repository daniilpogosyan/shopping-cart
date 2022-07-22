export default function ItemCard(props) {
  const handleAddButtonClick = () => {
    props.onAdd();
  };

  return (
    <article className="item-card">
      <img 
        className="item-card__img"
        src={props.imgUrl} alt={props.title}
      />
      <p className="item-card__price">
        {props.price}
      </p>
      <p className="item-card__title">
        {props.name}
      </p>
      <button
        className="item-card__btn"
        onClick={handleAddButtonClick}
      > 
        Add to cart
      </button>
    </article>
  )
}