import React from 'react'
import './Landing.css'

const Landing = () => {
  
  
  const resizeHandler = () => {
    let deviceWidth = document.body.clientWidth
    if(deviceWidth < 768) {

    }
  }
  document.addEventListener('resize', resizeHandler)

  return (
    <>
      <section className="landing">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="landing-content">
                <h2 className="title landing-title">
                  불합리한 시장을<br />
                  바꿔나갑니다.
                </h2>
                <p className="desc landing-desc">모두가 합리적인 가격에 좋은 제품을 누릴 수 있도록.</p>

                <div className="scroll-down"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Landing
