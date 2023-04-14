import { useEffect, useState } from 'react'
import './App.css'
import "primereact/resources/themes/lara-light-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import CustomCard from './components/CustomCard/CustomCard'
import MyCard from './components/MyCard'
import Logo from './assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Route,Routes} from 'react-router-dom'
import LoadingLogo from './assets/LoadingLogo.png'

import { Divider } from 'primereact/divider';
import Loading from './components/Loading';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel/Carousel';
import HomeSection from './components/HomeSection';
import Galery from './components/Galery3D/Galery';
import HomeScreen from './views/HomeScreen';
import GaleryScreen from './views/GaleryScreen';
function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false)
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [])

  const About = () => <h1 className='text-black'>About</h1>

  if (loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/galery' element={<GaleryScreen/>} />
          <Route path='*' element={<h1 className='text-black'>404</h1>} />
        </Routes>
        <Footer/>
      </div>
    )
  }


}
{/*
*/}
export default App
