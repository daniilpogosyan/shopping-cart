export default function CartItem(props) {
  return (
    <div className="cart-item">
      <p className="cart-item__name">{props.name}</p>
      <div>
          <input value={props.amount} type="number" />
      </div>
    </div>
  )
}