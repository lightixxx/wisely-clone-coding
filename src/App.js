// eslint-disable-next-line

import './grid.min.css'
import './reset.css'
import './App.css'
import Header from './components/Header'
import Landing from './components/Landing'
import BrandStory from './components/BrandStory'
import Blade from './components/Blade'
import Subscription from './components/Subscription'
import StartTrial from './components/StartTrial'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <BrandStory />
      <Blade />
      <Subscription />
      <StartTrial />
      <Footer />
      <div className="trial-banner">
        <a href="#">
          <div className="trial-banner-text">
            <h5 className="trial-banner-title">와이즐리 체험 세트</h5>
            <p className="trial-banner-desc">지금 바로 시작해보세요</p>
          </div>
          <button type="button" className="banner-detail-button">자세히</button>
        </a>
      </div>
      <button type="button" className="chatBot"></button>
    </div>
  )
}

export default App;
