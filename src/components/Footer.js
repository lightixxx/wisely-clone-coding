/* eslint-disable */

import React from 'react'
import './Footer.css'
import facebookImage from '../assets/images/facebook.svg'
import instagramImage from '../assets/images/instagram.svg'
import footerLogo from '../assets/images/logo_footer.svg'

const Footer = () => {
  let deviceWidth = document.body.clientWidth
  const footerInfoDropDown = (e) => {
    e.target.nextSibling.classList.toggle('disable')
  }
  const mobileFooterBrand = 
    <div className="mobile-footer-sns">
      <div className="footer-logo">
        <a href="#"><img src={footerLogo} alt="와이즐리"/></a>
      </div>
      <ul className="sns-list">
        <li className="sns-list-item">
          <a href="#">
            <img src={facebookImage} alt="와이즐리 페이스북" />
          </a>
        </li>
        <li className="sns-list-item">
          <a href="#">
            <img src={instagramImage} alt="와이즐리 인스타그램" />
          </a>
        </li>
      </ul>
    </div>
  
  const mobileFooterInfo = 
    <div className="mobile-footer-info" onClick={footerInfoDropDown}>
      <h4 className="footer-info-title">&#40;주&#41; 와이즐리 컴퍼니 사업자 정보</h4>
      <p className="footer-info-desc disable">
        서울시 강남구 테헤란로 415 엘세븐호텔 강남타워 오피스동 4층 401호, 402호, 403호<br />
        대표자: 이기웅 <br />
        <br />
        사업자등록번호: 123-45-67890<br />
        통신판매업신고번호: 2021-서울강남-01234<br />
        <br />
        개인정보보호책임자: 이기웅&#40;<a href="mailto:dlrldnd1224@naver.com">lightixxx@naver.com</a>&#41;<br />
        고객센터: <a href="tel:02-1234-5678">1234-5678</a><br />
        <a href="mailto:dlrldnd1224@naver.com">lightixxx@naver.com</a><br />
        제휴문의: <a href="mailto:dlrldnd1224@naver.com">lightixxx@naver.com</a><br />
      </p>
    </div>

  

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              { deviceWidth < 768 ? mobileFooterBrand : null }
              <div className="footer-header">
                <ul className="brand-info">
                  <li><a href="#">개인정보처리방침</a></li>
                  <li><a href="#">이용안내</a></li>
                  <li><a href="#">사업자정보확인</a></li>
                  <li><a href="#">이용약관</a></li>
                </ul>
                
                <ul className="site-service">
                  <li><a href="#">로그아웃</a></li>
                  <li><a href="#">고객센터</a></li>
                  <li><a href="#">대량구매</a></li>
                  <li><a href="#">인재채용</a></li>
                </ul>

                { deviceWidth < 768 ? mobileFooterInfo : null }
              </div>

              <div className="footer-content">
                <div className="footer-content-wrapper">
                  <h4 className="footer-content-title">주식회사 와이즐리컴퍼니</h4>
                  <p className="footer-content-info">
                  서울시 강남구 테헤란로 415 엘세븐호텔 강남타워 오피스동 4층 401호, 402호, 403호<span className="comma">, </span>대표자: 이기웅 <br />
                  사업자등록번호: 123-45-67890<span className="comma">, </span>통신판매업신고번호: 2021-서울강남-01234<br />
                  개인정보보호책임자: 이기웅(<a href="mailto:dlrldnd1224@naver.com">lightixxx@naver.com</a>)<span className="comma">, </span>고객센터: <a href="tel:02-1234-5678">1234-5678</a> <a href="mailto:dlrldnd1224@naver.com">lightixxx@naver.com</a><br />
                  제휴문의: <a href="mailto:dlrldnd1224@naver.com">lightixxx@naver.com</a>
                  </p>
                </div>
                <div className="footer-content-brand">
                  <div className="footer-logo">
                    <a href="#"><img src={footerLogo} alt="와이즐리"/></a>
                  </div>
                  <ul className="sns-list">
                    <li className="sns-list-item">
                      <a href="#">
                        <img src={facebookImage} alt="와이즐리 페이스북" />
                      </a>
                    </li>
                    <li className="sns-list-item">
                      <a href="#">
                        <img src={instagramImage} alt="와이즐리 인스타그램" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <p className="footer-footer">
                Copyright 2021 <strong>WISELY.</strong>All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
