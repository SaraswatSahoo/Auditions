import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import RegistrationPage from './pages/RegistrationPage/Registration'
import QuestionPage from './pages/QuestionPage/QuestionPage'
import RatingPage from './pages/RatingPage/RatingPage'
import ThankyouPage from './pages/ThankyouPage/ThankyouPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/register' element={<RegistrationPage/>}/>
        <Route path='/questions' element={<QuestionPage/>}/>
        <Route path='/rating' element={<RatingPage/>}/>
        <Route path='/thankyou' element={<ThankyouPage/>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default App
