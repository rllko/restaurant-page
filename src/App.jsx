import './App.css'
import FoodNav from './components/FoodNav'
import Header from './components/Header'
import NavBar from './components/NavBar'
import {cards} from './cards'
import CardCarousel from './components/CardCarousel'
import Search from './components/Search'
import Footer from './components/Footer'

function App() {

  function handlePrevious(ref){
    requestAnimationFrame(() => {
      const scrollLeft = ref.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(ref.current.children[0]).width
      );
      ref.current.scrollLeft = scrollLeft - itemWidth*3;
    });
  }

  function handleNext(ref){
    requestAnimationFrame(() => {
      const scrollLeft = ref.current.scrollLeft;
      const itemWidth = parseInt(
        getComputedStyle(ref.current.children[0]).width
      );
      ref.current.scrollLeft = scrollLeft + itemWidth*3;
    });
  }

  return (
    <div className=''>
    <Header/>
    <NavBar/>
    <FoodNav/>
    <Search/>
    <CardCarousel items={cards} title={"Mais populares"} handleNext={handleNext} handlePrevious={handlePrevious}/>
    <CardCarousel items={cards} title={"Mais rápidos"} handleNext={handleNext} handlePrevious={handlePrevious}/>
    <CardCarousel items={cards} title={"Mais baratos"} handleNext={handleNext} handlePrevious={handlePrevious}/>
    <CardCarousel items={cards} title={"Com as melhores classificações"} handleNext={handleNext} handlePrevious={handlePrevious} />
    <Footer/>
    </div>
  )
}

export default App
