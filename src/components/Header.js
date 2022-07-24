import { Link } from 'react-router-dom';
import './style/Header.css';

export default function Header(props) {
  return (
    <header className="header">
      <h1 className="header__heading">Shopping Cart</h1>
      <ul className="header__links">
        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/shop">Shop</Link></li>
      </ul>
    </header>
  )
}

