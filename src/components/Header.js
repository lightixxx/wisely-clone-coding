/* eslint-disable */

import React, { useState } from 'react'
import Cart from './Cart'
import logo from '../logo.svg'
import cart from '../cart.svg'
import HamburgerBtn from '../Hamburger-button.svg'
import CloseBtn from '../Close-button.svg'
import './Header.css'

const Header = () => {
  const toggleBtn = document.querySelector('.toggle-btn')
  const menuList = document.querySelector('.menu-list')
  const [showCart, setShowCart] = useState(false)

  let deviceHeight = document.body.scrollHeight
  let scrollHeight = document.documentElement.scrollTop

  const cartBtnHandler = () => {
    
  }

  const toggleBtnHandler = () => {
    console.log('토글버튼 눌림');
    // 이미지 바꾸기
    // menuList.classList.toggle('active')
  }

  // document.addEventListener('scroll', () => {
  //   if(scrollHeight > 70) {
      
  //   }
  // })


  return (
    <>
      <header className="header" onScroll={(e) => {
        if(scrollHeight > 70) {
          
        }
      }}>
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
                    <button type="button" className="cart-button" onClick={cartBtnHandler} >
                      <img src={cart} alt="장바구니 아이콘" />
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
