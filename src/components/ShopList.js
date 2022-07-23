import ItemCard from './ItemCard';

export default function ShopList(props) {
  const handleAddItem = (e, id) => {
    props.onAddItem(e, id)
  }

  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <ItemCard
            imgUrl={item.imgUrl}
            name={item.name}
            price={item.price}
            onAdd={(e) => handleAddItem(e, item.id)}
          />
        </li>
      ))}
    </ul>
  )
}