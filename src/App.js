import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/view/About';
import Home from './components/view/Home';
import BackToTop from '../src/common/BackToTop'
import Features from './components/view/Features';
import Dashboard from './components/view/Dashboard';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/features' element={<Features />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      <BackToTop/>
    </>

  )
}

export default App;