/* eslint-disable */

import React, { useState } from 'react'
import Cart from './Cart'
import logo from '../logo.svg'
import cartImage from '../cart.svg'
import HamburgerBtn from '../Hamburger-button.svg'
import CloseBtn from '../Close-button.svg'
import './Header.css'

const Header = () => {

  const [showCart, setShowCart] = useState(false)

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-content">

                <button type="button" className="toggle-btn" onClick={toggleBtnHandler}>
                  <img src={HamburgerBtn} alt="메뉴 열기"/>
                </button>
                

                <div className="logo">
                  <h1 className="logo-title">
                    <a href="./index.html">
                      <img src={logo} alt="WISELY"/>
                    </a>
                  </h1>
                </div>

                <nav className="menu">
                  <h2 className="sr-only">Global Navigation Menu</h2>
                  <ul className="menu-list">
                    <li className="menu-list-item"><a>구독하기</a></li>
                    <li className="menu-list-item"><a>상품보기</a></li>
                    <li className="menu-list-item"><a>와이즐리 이야기</a></li>
                    <li className="menu-list-item"><a>고객센터</a></li>
                  </ul>
                </nav>

                <div className="sub-menu">
                  <a className="my-page">마이페이지</a>
                  
                  <div className="cart-container">
                    <button type="button" className="cart-button">
                      <img src={cartImage} alt="장바구니 아이콘" />
                    </button>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
