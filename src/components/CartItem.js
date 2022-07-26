export default function CartItem(props) {
  const handleRemove = () => {
    props.onRemove();
  }

  return (
    <div className="cart-item">
      <p className="cart-item__name">{props.name}</p>
      <div>
          <input value={props.amount} type="number" />
          <button onClick={handleRemove}>remove</button>
      </div>
    </div>
  )
}