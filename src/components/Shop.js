import { useState, useEffect } from 'react';
import ShopList from './ShopList';
import Sidebar from './Sidebar';
import Cart from './Cart';

export default function Shop(props) {
  const [cart, setCart] = useState([]);
  const [shopData, setShopData] = useState({items: []});

  useEffect(() => {
    setShopData(require('../data/items.json'))
  }, []);

  const addToCart = (itemId) => {
    const inCartAlready = cart.some((item) => item.id === itemId);
    if (inCartAlready) {
      const AddedItem = cart.find((item) => item.id === itemId);
      const newCart = cart.filter((item) => item.id !== itemId);
      newCart.push({
        name: AddedItem.name,
        id: AddedItem.id,
        amount: AddedItem.amount + 1
      });

      setCart(newCart);
      return
    }

    const shopItem = shopData.items.find((item) => item.id === itemId);
    setCart([...cart, {
      name: shopItem.name,
      id: shopItem.id,
      amount: 1
    }]);
  }

  const handleItemAddButtonClick = (e, id) => {
    addToCart(id);
  }

  return (
    <>
      <ShopList
        items={shopData.items}
        onAddItem={handleItemAddButtonClick}
      />
      <Sidebar togglerText="🛒 My Cart">
        <Cart items={cart} />
      </Sidebar>
    </>
  )
}