import { Route, Routes } from 'react-router'
import HomePage from './components/pages/HomePage'
import MapPage from './components/pages/MapPage'
import QuizPage from './components/pages/QuizPage'

const App = () => {
  return (
    <div className='bg-white min-h-screen w-full overflow-hidden'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/peta" element={<MapPage />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </div>
  )
}

export default App