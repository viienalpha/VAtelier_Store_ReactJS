import React, { useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import logo from '../assets/images/logo/atelierwhite.png'
const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Sản phẩm",
        path: "/catalog"
    },
    {
        display: "Bộ sưu tập",
        path: "/accessories"
    },
    {
        display: "Liên hệ",
        path: "/contact"
    },

]
const Header = () => {
    const { pathname } = useLocation()
    const activeNav = mainNav.findIndex(e => e.path === pathname)

    const ref = useRef(null)
    const menuLeft = useRef(null)
    const menuToggle = () => menuLeft.current.classList.toggle('active')
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                ref.current.classList.add('shrink')
            }
            else {
                ref.current.classList.remove('shrink')
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
    return (
        <div className="header " ref={ref}>
            <div className="container">
                <div className="header__logo">
                    <Link to="/#">
                        <img src={logo} alt="" />
                    </Link>
                </div>

                <div className="header__menu">
                    <div className="header__menu__mobile-toggle" onClick={menuToggle}>
                        <i className='bx bx-menu-alt-left'></i>
                    </div>
                    <div className="header__menu__left" ref={menuLeft}>
                        <div className="header__menu__left__close" onClick={menuToggle}>
                            <i className='bx bx-chevron-left'></i>
                        </div>
                        <div className={`header__menu__item header__menu__left__item`}
                        >
                            <Link to="/#">
                                <img src={logo} height={50}  alt="" />
                            </Link>
                        </div>
                        {
                            mainNav.map((nav, index) => (
                                <div key={index}
                                    className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : ''}`}
                                    onClick={menuToggle}
                                >
                                    <Link to={nav.path}>
                                        <span>{nav.display}</span>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="header__menu__right">
                        <div className="header__menu__item hearder__menu__right_item">
                            <i className="bx bx-search"></i>
                        </div>
                        <div className="header__menu__item hearder__menu__right_item">
                            <Link to="/cart">
                                <i className='bx bx-cart-alt' ></i>
                            </Link>
                        </div>
                        <div className="header__menu__item hearder__menu__right_item">
                            <i className='bx bx-user'></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
