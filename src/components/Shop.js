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
  
  const removeFromCart = (itemId) => {
    const newCart = cart.filter((item) => item.id !== itemId);
    setCart(newCart);
  }

  const handleItemAddButtonClick = (e, id) => {
    addToCart(id);
  }
  
  const handleRemoveItemClick = (e, id) => {
    removeFromCart(id);
  }

  const handleItemAmountChange = (e, id) => {
    const editedItem = {...cart.find((item) => item.id === id)};
    editedItem.amount = e.target.value;
    const newCart = cart.filter((item) => item.id !== id);
    newCart.push(editedItem);
    setCart(newCart);
    console.log(editedItem)
  }

  return (
    <>
      <ShopList
        items={shopData.items}
        onAddItem={handleItemAddButtonClick}
      />
      <Sidebar togglerText="🛒 My Cart">
        <Cart
          items={cart}
          onRemoveItem={handleRemoveItemClick}
          onItemAmountChange={handleItemAmountChange}
        />
      </Sidebar>
    </>
  )
}