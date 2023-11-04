import './App.css'
import About from './components/about/about'
import Banner from './components/banner/banner'
import Contact from './components/contactos/contact'
import Feature from './components/feature/feature'
import Offer from './components/offers/offer'

function App() {

  return (
    <div>
      <Banner />
      <Feature />
      <Offer />
      <About />
      <Contact/>
    </div>
  )
}

export default App
