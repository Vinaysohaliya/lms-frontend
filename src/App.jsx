import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import About from './pages/about'
import PageNotFound from './pages/pageNotFound'
import Signup from './pages/signup'
function App() {

  return ( 
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/aboutus' element={<About />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
    </>
  )
}

export default App
