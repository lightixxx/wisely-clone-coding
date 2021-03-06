/* eslint-disable */

import React from 'react'
import './Cart.css'
import razorSetImage from '../assets/images/razor_2up_navy.png'
import refillBladeImage from '../assets/images/refill_blade.png'
import shavingGelImage from '../assets/images/shaving_gel_150.png'
import afterShaveImage from '../assets/images/after_shave_60_oily.png'
import giftSetImage from '../assets/images/gift_set_navy.png'


const Cart = () => {

  return (
    <section className="cart">
      <div className="cart-wrapper">
        <h2 className="cart-title">장바구니</h2>
        <p className="cart-desc">장바구니가 비어있습니다<br/>상품을 추가해주세요</p>
        <div className="cart-product">
          <p className="cart-product-desc">함께하면 더 현명한 습관</p>
          <ul className="cart-product-list">
            <li className="cart-product-list-item">
              <img src={razorSetImage} alt="면도기 세트" />
              <div className="product-info-container">
                <div className="product-info-title">면도기 세트</div>
                <div className="product-info-price">8,900원</div>
              </div>
              <div className="cart-button-container">
                <button className="cart-add-button free-shipping">추가</button>
              </div>
            </li>
            <li className="cart-product-list-item">
              <img src={refillBladeImage} alt="리필 면도날" />
              <div className="product-info-container">
                <div className="product-info-title">리필면도날</div>
                <div className="product-info-price">9,600원</div>
              </div>
              <div className="cart-button-container">
                <button className="cart-add-button">추가</button>
              </div>
            </li>
            <li className="cart-product-list-item">
              <img src={shavingGelImage} alt="쉐이빙젤" />
              <div className="product-info-container">
                <div className="product-info-title">쉐이빙젤</div>
                <div className="product-info-price">4,500원</div>
              </div>
              <div className="cart-button-container">
                <button className="cart-add-button">추가</button>
              </div>
            </li>
            <li className="cart-product-list-item">
              <img src={afterShaveImage} alt="리페어 애프터쉐이브" />
              <div className="product-info-container">
                <div className="product-info-title">리페어 애프터쉐이브</div>
                <div className="product-info-price">6,500원</div>
              </div>
              <div className="cart-button-container">
                <button className="cart-add-button">추가</button>
              </div>
            </li>
            <li className="cart-product-list-item">
              <img src={giftSetImage} alt="선물세트" />
              <div className="product-info-container">
                <div className="product-info-title">선물세트</div>
                <div className="product-info-price">
                  <span className="product-info-price-discount">34,900</span>
                  29,800원
                </div>
              </div>
              <div className="cart-button-container">
                <button className="cart-add-button free-shipping">추가</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Cart
