import React from 'react'
import './StartTrial.css'
import StartTrialImage from '../assets/images/trial_set.png'

const StartTrial = () => {
  return (
    <>
      <section className="start-trial">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="start-trial-content">
                <h3 className="title start-trial-title">합리적인 소비의 시작.</h3>
                <p className="desc start-trial-desc">체험 세트로 부담없이 만나보세요.</p>
                <button type="button" className="primary-button">더 알아보기</button>
              </div>
            </div>
            <div className="col-6">
              <div className="start-trial-image">
                <img src={StartTrialImage} alt="체험 세트" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default StartTrial
