import MyntraLogo from '../../public/images/myntra_logo.webp';
import { IoMdPerson } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

const Header = () => {
    const bagItems = useSelector(store => store.bag);
    // console.log(bagItems);
    return (
        <>
            <header>
                <div className="logo_container">
                    <Link to="/">
                        <img className="myntra_home" src={MyntraLogo} alt="myntra Home" />
                    </Link>
                </div>
                <nav className="nav_bar">
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">Kids</a>
                    <a href="#">Home & Living</a>
                    <a href="#">Beauty</a>
                    <a href="#">Studio <sup>New</sup></a>
                </nav>
                <div className="search_bar">
                    <span className="material-symbols-outlined search_icon">search</span>
                    <input className="search_input" placeholder="Search for products, brands and more" />
                </div>
                <div className="action_bar">
                    <div className="action_container">
                        <IoMdPerson />
                        <span className="action_name">Profile</span>
                    </div>

                    <div className="action_container">
                        <FaHeart />
                        <span className="action_name">Wishlist</span>
                    </div>

                    <Link to={'/bag'} className='text-decoration-none text-black bag'>
                        <div className="action_container">
                            <GiShoppingBag />
                            <span className="action_name">Bag</span>
                            <span className="bag-item-count">{bagItems.length}</span>
                        </div>
                    </Link>
                </div>
            </header>
        </>
    )
}

export default Header