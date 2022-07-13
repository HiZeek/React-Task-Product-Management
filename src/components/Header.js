import { Link } from "react-router-dom";
import '../styles/Header.css'

// IMAGES
import Logo from '../img/Logo.png';
import Cart from '../img/Empty_Cart.png';
import Dollar from '../img/Dollar_Icon.png';
import UpArrow from '../img/Up_Arrow.png';
import { useState } from "react";

const Header = () => {

    const [rotate, setRotate] = useState(false);

    const selectCurrency = () => {
        setRotate(!rotate)
    }

  return (
    <div className="header">
        <div className="header-left">
            <Link to='/women' className="current-link">Women</Link>
            <Link to='/men'>Men</Link>
            <Link to='/kids'>Kids</Link>
        </div>
        <div className="header-center">
            <Link to='/'>
                <img src={Logo} alt="Logo" />
            </Link> 
        </div>
        <div className="header-right">
            <img src={Dollar} alt="Currency" />
            <img src={UpArrow}  className={rotate ? "select-currency" : " "} onClick={() => {selectCurrency()}} alt="up Arrow" />
            <img src={Cart} alt="Cart" />
        </div>
    </div>
  )
}

export default Header;