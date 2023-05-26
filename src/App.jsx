import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'

function App() {
  return (
    <div className='flex flex-col gap-4'>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
