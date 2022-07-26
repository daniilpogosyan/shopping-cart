import CartItem from './CartItem';

export default function Cart({items, ...props}) {
  return (
    <ul className="cart">
        {items.length > 0
        ? items.map((item) => (
          <li key={item.id}>
            <CartItem
              name={item.name}
              amount={item.amount}
              onRemove={(e) => props.onRemoveItem(e, item.id)}
            />
          </li>
        ))
        : <p>Your cart is empty :(</p>
        }
    </ul>

  )
}