import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Ajax from '../components/Ajax.js';
import { GoMarkGithub } from "react-icons/go";
import { FaAlignJustify, FaBullseye, FaRegUser, FaRegHeart, FaShoppingCart } from "react-icons/fa";

function Navigation() {
    const location = useLocation().pathname
    return (
        <header className="header">
            <nav className="header__nav">
                <div className="container header__nav-content">
                    <Ajax />
                    <ul className="header__nav-list">
                        <li>
                            <Link to="/about" className={location === '/about' ? "header__link active" : "header__link"}>О магазине </Link>
                        </li>
                        <li>
                            <Link to="contact" className={location === '/contact' ? "header__link active" : "header__link"}>Контакты</Link>
                        </li>
                        <li>
                            <Link to="condition" className={location === '/condition' ? "header__link active" : "header__link"}>Условия покупки</Link>
                        </li>
                        <li>
                            <Link to="delivery" className={location === '/delivery' ? "header__link active" : "header__link"}>Доставка</Link>
                        </li>
                        <li>
                            <Link to="comment" className={location === '/comment' ? "header__link active" : "header__link"}>Отзывы </Link>
                        </li>
                        <li>
                            <Link to="certificate" className={location === '/certificate' ? "header__link active" : "header__link"}>Сертификаты</Link>
                        </li>
                    </ul>
                    <a href="tel:87772223344" className="header__num">8-777-222-33-44</a>
                </div>
                <div className="header__line"></div>
                <div className="header__search container">
                    <GoMarkGithub className="gitHub" />
                    <a href="" className="header__btn">
                        <FaAlignJustify className="bar" />
                        Каталог
                    </a>
                    <form className="header__form" action="">
                        <input type="search" placeholder="Поиск" className="header__form-input" />
                        <button type="submit" className="header__form-btn">
                            <FaBullseye className="white" />
                        </button>
                    </form>

                    <div className="header__icon">
                        <FaRegUser className="header__icon-user" />
                        <FaRegHeart className="header__icon-user" />
                        <FaShoppingCart className="header__icon-user" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navigation
