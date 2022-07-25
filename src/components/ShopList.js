import ItemCard from './ItemCard';
import './style/ShopList.css';

export default function ShopList(props) {
  const handleAddItem = (e, id) => {
    props.onAddItem(e, id)
  }

  return (
    <ul className='shop-list'>
      {props.items.map((item) => (
        <li className='shop-list__item' key={item.id}>
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