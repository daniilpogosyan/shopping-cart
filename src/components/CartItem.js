export default function CartItem(props) {
  const handleRemove = () => {
    props.onRemove();
  }
  const handleAmountChange = (e) => {
    props.onAmountChange(e);
  }

  return (
    <div className="cart-item">
      <p className="cart-item__name">{props.name}</p>
      <div>
          <input
            min={1}
            value={props.amount}
            type="number" 
            onChange={handleAmountChange}
          />
          <button onClick={handleRemove}>remove</button>
      </div>
    </div>
  )
}