import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Stars from './components/Stars/Stars'
import ShootingStar from './components/ShootingStar/ShootingStar'

export default function App() {
  return (
    <>
      <Stars />
      <ShootingStar />
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Contact />
      </main>
    </>
  )
}
