import CardPizza from './components/CardPizza'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Nabvar'
import Register from './components/Register'


const App = () => {
  return (
    <>
      <Navbar />
      <Home/>
      {/*<Register/>*/}
      {/*<Login/>*/}
      <Cart/>
      <Footer />
    </>
  )
}

export default App