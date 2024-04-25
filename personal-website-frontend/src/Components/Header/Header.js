import './Header.scss';
import { List } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react'


function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };

    return (
        <>
            <header>
                <div className='mobile-header'>
                    <List className='mobile-header__list' onClick={toggleDropdown} />
                    <p className='mobile-header__name'>Chaia Billan</p>
                </div>
            </header>
            <div className={`menu ${dropdownOpen ? 'open' : ''}`} onClick={closeDropdown}>
                <Link to='#' className='menu__link'>
                    About
                </Link>
                <Link to='#' className='menu__link'>
                    Resume
                </Link>
                <Link to='#' className='menu__link'>
                    Skills
                </Link>
                <Link to='#' className='menu__link'>
                    Projects
                </Link>
            </div>
        </>
    )
}

export default Header