import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/view/About';
import Home from './components/view/Home';
import BackToTop from '../src/common/BackToTop'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
      <BackToTop/>
    </>

  )
}

export default App;