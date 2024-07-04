import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import CalculatorCore from './components/CalculatorCore/CalculatorCore'


function App() {



  return (
    <div className='flex justify-center items-center h-screen w-full bg-[rgb(59,70,100)] font-sans'>
      <Routes>
        <Route path='/Calculator2' element={<CalculatorCore />} />
        <Route path='/' element={<Navigate to={'/Calculator2'} />} />
      </Routes>
    </div>
  )
}




export default App
