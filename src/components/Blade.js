/* eslint-disable */

import React from 'react'
import blade from '../assets/images/blade.png'
import './Blade.css'

const Blade = () => {
  return (
    <>
      <section className="blade">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="blade-content">
                <h3 className="blade-title">칼의 도시,<br />독일 졸링겐의 5중날.</h3>
                <p className="blade-desc">세계적 엔지니어들이 만든 정교하고<br />부드러운 퍼포먼스를 경험하세요.</p>
                <a className="blade-link" href="#">제품 상세보기 &gt;</a>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="blade-image">
                <img src={blade} alt="독일 졸링겐의 5중날"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blade
