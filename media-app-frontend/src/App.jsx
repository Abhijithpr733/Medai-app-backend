import './App.css'
import Button from 'react-bootstrap/Button';
import { Routes , Route } from 'react-router-dom';
import Landingpage from './Pages/Landingpage';
import Home from './Pages/Home';
import Watchhistory from './Pages/Watchhistory';
import Header from './Components/Header';
import Footer from './Components/Footer'
function App() {


  return (
    <>
    <Header/>
    <Routes>
      {/* landing page path : http://localhost:5173*/}
      <Route path='/' element={<Landingpage/>}/>
      {/* home page path : http://localhost:5173/home*/}
      <Route path='/home' element={<Home/>}/>
      {/* watch history page path : http://localhost:5173/watch-hostory*/}
      <Route path='/watch-history' element={<Watchhistory/>}/>
      {/* <Route path='*' element={<PageFoundNot/>}/> */}
    </Routes>
    <Footer />
    </>
  )
}

export default App
