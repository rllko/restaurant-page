import './App.css'
import FoodNav from './components/FoodNav'
import Header from './components/Header'
import NavBar from './components/NavBar'
import {cards} from './cards'
import CardCarousel from './components/CardCarousel'
import Search from './components/Search'
import Footer from './components/Footer'

function App() {

  return (
    <div className='max-w-7xl mx-auto'>
    <Header/>
    <NavBar/>
    <FoodNav/>
    <Search/>
    <CardCarousel items={cards} title={"Mais populares"}/>
    <CardCarousel items={cards} title={"Mais rápidos"}/>
    <CardCarousel items={cards} title={"Mais baratos"}/>
    <CardCarousel items={cards} title={"Com as melhores classificações"}/>
    <Footer/>
    </div>
  )
}

export default App
