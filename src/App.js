// eslint-disable-next-line

// import './grid.min.css'
import './reset.css'
import './App.css'
import Header from './components/Header'
import Landing from './components/Landing'
import BrandStory from './components/BrandStory'


function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <BrandStory />

      {/* <div></div> */}
      <button type="button" className="chatBot"></button>
    </div>
  )
}

export default App;
