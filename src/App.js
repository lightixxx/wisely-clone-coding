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
      {/* <div></div> */}
      <button type="button" className="chatBot"></button>
    </div>
  )
}

export default App;
