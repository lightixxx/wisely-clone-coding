import React from 'react'
import './Subscription.css'
import subscriptionProduct from '../assets/images/products.png'

const Subscription = () => {
  return (
    <>
      <section className="subscription">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="subscription-image">
                <img src={subscriptionProduct} alt="구독 제품"/>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="subscription-content">
                <div className="subscription-content-wrapper">
                  <h3 className="title subscription-title">구독으로 만나는<br />편리한 생활.</h3>
                  <p className="desc subscription-desc">새 면도날이 알아서 배송되고,<br />모든 제품이 항상 할인돼요.</p>
                  <a className="link subscription-link">더 알아보기 &gt;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Subscription
