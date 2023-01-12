import './App.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import APropos from './pages/APropos'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/a-propos' element={<APropos />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
