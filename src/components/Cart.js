import CartItem from './CartItem';

export default function Cart({items}) {
  return (
    <ul className="cart">
        {items.length > 0
        ? items.map((item) => (
          <li key={item.id}>
            <CartItem
              name={item.name}
              amount={item.amount}
            />
          </li>
        ))
        : <p>Your cart is empty :(</p>
        }
    </ul>

  )
}