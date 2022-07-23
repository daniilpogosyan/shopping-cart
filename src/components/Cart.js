export default function Cart({items}) {
  return (
    <div className="cart">
        {items.length > 0
        ? items.map((item) => <p key={item.id}>{item.id} : {item.amount}</p>)
        : <p>Your cart is empty :(</p>
        }
    </div>

  )
}