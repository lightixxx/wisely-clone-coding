import React from 'react'
import './BrandStory.css'

const BrandStory = () => {
  return (
    <>
      <section className="brand-story">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="brand-story-content">
                <strong>면도날 4입 기준</strong>
                <dl className="price-infographic">
                  <div className="price-infographic-wisely">
                    <dd>9,600원<br />이하</dd>
                    <dt>와이즐리</dt>
                  </div>
                  <div className="price-infographic-etc">
                    <dd>20,000원<br />내외</dd>
                    <dt>시중 주요 브랜드</dt>
                  </div>
                </dl>
                <h3 className="brand-story-title">더 이상 속지 마세요</h3>
                <p className="brand-story-desc light-desc">
                  와이즐리는 중간 유통, 과도한 마케팅 등<br/>
                  시장 관행을 거부하고, 정직한 가격을 만듭니다.
                </p>
                <a className="brand-story-link" href="#">브랜드 스토리 <span>&gt;</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BrandStory
