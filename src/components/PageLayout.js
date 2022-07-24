import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import './style/PageLayout.css';

export default function PageLayout(props) {
  return (
    <div className='page-layout'>
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}