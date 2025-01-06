import { Route, Routes } from 'react-router'
import HomePage from '../components/pages/HomePage'
import QuizPage from '../components/pages/QuizPage'
import MapPage from '../components/pages/MapPage'

const AppRouter = () => {
     return (
          <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/peta" element={<MapPage />} />
               <Route path="/quiz" element={<QuizPage />} />
          </Routes>
     )
}

export default AppRouter