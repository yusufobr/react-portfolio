import './App.css'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Background from './components/Background'


function App() {
  return (
    <div className='flex flex-col gap-4'>
      <Header />
      <Hero />
      <Projects />
      <Footer />
      <Cursor />
      <Background />
    </div>
  )
}

export default App
