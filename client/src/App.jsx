import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
// import StyleNav from './components/StyleNav';
// import StyleNav from './components/StyleNav';
import Home from './Pages/Home';
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import About from './Pages/About'
import BookAppoint from './Pages/bookAppoint'
function App() {
  const [count, setCount] = useState(0)

  return (
  
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/services' element={<Services/>} />
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/about' element={<About/>}/>
 
       <Route path='/bookAppoint' element={<BookAppoint/>}/>
     
     </Routes>
    
  )
}

export default App
