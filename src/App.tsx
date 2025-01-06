import Footer from './components/layouts/Footer'
import Navbar from './components/layouts/Navbar'
import AppRouter from './routes/AppRouter'

const App = () => {
  return (
    <div className='bg-white min-h-screen'>
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App